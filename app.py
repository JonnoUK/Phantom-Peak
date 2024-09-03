from flask import Flask, render_template, request, redirect, url_for, session, jsonify, send_from_directory
import sqlite3
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = 'your_secret_key'

# Initialize database
def init_db():
    with sqlite3.connect('users.db') as conn:
        conn.execute('''CREATE TABLE IF NOT EXISTS users
                        (id INTEGER PRIMARY KEY, email TEXT UNIQUE, password TEXT, first_name TEXT, preferences TEXT)''')
        conn.commit()

init_db()

# Registration page
@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        email = request.form['email']
        firstname = request.form.get('firstname')
        password = request.form['password']
        hashed_password = generate_password_hash(password)  # Hash the password for security

        with sqlite3.connect('users.db') as conn:
            cursor = conn.cursor()
            try:
                # Insert the new user into the users table
                cursor.execute("INSERT INTO users (email, password, first_name) VALUES (?, ?, ?)", (email, hashed_password, firstname))
                conn.commit()
                return redirect(url_for('login'))  # Redirect to login page after successful registration
            except sqlite3.IntegrityError:
                # Email already exists in the database, pass the email back to the form
                error = "Email already exists! Please use a different email."
                return render_template('register.html', error=error, email=email)

    # Render the registration page for GET requests
    return render_template('register.html')

# Login page
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        with sqlite3.connect('users.db') as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM users WHERE email = ?", (email,))
            user = cursor.fetchone()

            if user and check_password_hash(user[2], password):
                # Login successful
                session['user_id'] = user[0]
                session['email'] = user[1]
                session['first_name'] = user[3]  # Assuming first_name is at index 3
                session['preferences'] = user[4] if len(user) > 4 else ""  # Assuming preferences is at index 4
                return redirect(url_for('collection_page'))
            else:
                # Login failed: invalid email or password
                error = "Incorrect email or password. Please try again."
                return render_template('login.html', error=error, email=email)

    return render_template('login.html')

# default user page / first login
@app.route('/collection')
def collection_page():
    if 'user_id' not in session:
        return redirect(url_for('login'))

    user_id = session['user_id']
    with sqlite3.connect('users.db') as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT preferences FROM users WHERE id = ?", (user_id,))
        preferences_row = cursor.fetchone()
        preferences = preferences_row[0] if preferences_row else None

    return render_template(
        'collection.html', 
        email=session['email'], 
        firstname=session.get('first_name', "")
    )



@app.route('/')
def no_route_detected():
    if 'user_id' not in session:
        return redirect(url_for('login'))
    else:
        return redirect(url_for('collection_page'))

# achievement gallery
@app.route('/achievements')
def achievement_gallery():
    if 'user_id' not in session:
        return redirect(url_for('login'))

    user_id = session['user_id']
    with sqlite3.connect('users.db') as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT preferences FROM users WHERE id = ?", (user_id,))
        preferences = cursor.fetchone()[0]

    return render_template('achievements.html', email=session['email'], firstname=session['first_name'] or "")




#Save Flipped Cards
@app.route('/save-flipped-cards', methods=['POST'])
def save_flipped_cards():
    data = request.get_json()
    if 'user_id' not in session:
        return redirect(url_for('login'))

    user_id = session['user_id']

    if not isinstance(data, dict):
        return jsonify({'success': False, 'message': 'Invalid input'})

    with sqlite3.connect('users.db') as conn:
        cursor = conn.cursor()

        # Check if the necessary columns exist and add them if they don't
        for key in data.keys():
            column_name = f'trail-{key}'
            
            # Check if the column exists
            cursor.execute(f"PRAGMA table_info(users)")
            columns_info = cursor.fetchall()
            column_exists = any(col[1] == column_name for col in columns_info)
            
            if not column_exists:
                # Add the missing column as an INTEGER type
                cursor.execute(f"ALTER TABLE users ADD COLUMN '{column_name}' INTEGER DEFAULT 0")

        # Prepare the SQL statement for insert or update
        columns = ', '.join(f'"trail-{key}"' for key in data.keys())
        placeholders = ', '.join('?' for _ in data.keys())
        values = [data[key] for key in data.keys()]

        cursor.execute(f'''
            INSERT INTO users (id, {columns})
            VALUES (?, {placeholders})
            ON CONFLICT(id) 
            DO UPDATE SET 
            {', '.join(f'"trail-{key}" = excluded."trail-{key}"' for key in data.keys())}
        ''', [user_id] + values)

        conn.commit()

    return jsonify({'success': True})



#Save Achievements
@app.route('/save-achievements', methods=['POST'])
def save_achievements():
    data = request.get_json()
    if 'user_id' not in session:
        return redirect(url_for('login'))

    user_id = session['user_id']

    if not isinstance(data, list):
        return jsonify({'success': False, 'message': 'Invalid input format'})

    with sqlite3.connect('users.db') as conn:
        cursor = conn.cursor()

        # Check if the necessary columns exist and add them if they don't
        cursor.execute("PRAGMA table_info(users)")
        columns_info = cursor.fetchall()
        existing_columns = {col[1] for col in columns_info}

        for item in data:
            column_name = f'achievement-{item["id"]}'
            
            if column_name not in existing_columns:
                # Add the missing column as an INTEGER type
                cursor.execute(f"ALTER TABLE users ADD COLUMN '{column_name}' INTEGER DEFAULT 0")
                existing_columns.add(column_name)

        # Prepare the SQL statement for insert or update
        columns = ', '.join(f'"achievement-{item["id"]}"' for item in data)
        placeholders = ', '.join('?' for _ in data)
        values = [item['unlocked'] for item in data]

        cursor.execute(f'''
            INSERT INTO users (id, {columns})
            VALUES (?, {placeholders})
            ON CONFLICT(id) 
            DO UPDATE SET 
            {', '.join(f'"achievement-{item["id"]}" = excluded."achievement-{item["id"]}"' for item in data)}
        ''', [user_id] + values)

        conn.commit()

    return jsonify({'success': True})


#get-flipped-cards
@app.route('/get-flipped-cards', methods=['GET'])
def get_flipped_cards():
    if 'user_id' not in session:
        return redirect(url_for('login'))

    user_id = session['user_id']
    flipped_cards = {}

    try:
        with sqlite3.connect('users.db') as conn:
            cursor = conn.cursor()

            # Fetch the column names
            cursor.execute('PRAGMA table_info(users)')
            columns = [row[1] for row in cursor.fetchall()]

            # Fetch the flipped card data for this user
            cursor.execute('SELECT * FROM users WHERE id = ?', (user_id,))
            user_data = cursor.fetchone()

            if user_data:
                # Print the user data for debugging
                
                flipped_cards = {columns[i]: user_data[i]
                                 for i in range(len(columns)) if columns[i].startswith('trail-')}            
                return jsonify(flipped_cards)
            else:
                return jsonify({'success': False, 'message': 'User not found'})
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)})


#get-achievements
@app.route('/get-achievements', methods=['GET'])
def get_achievements():
    if 'user_id' not in session:
        return redirect(url_for('login'))

    user_id = session['user_id']
    unlocked_achievements = {}

    try:
        with sqlite3.connect('users.db') as conn:
            cursor = conn.cursor()

            # Fetch the column names
            cursor.execute('PRAGMA table_info(users)')
            columns = [row[1] for row in cursor.fetchall()]

            # Fetch the flipped card data for this user
            cursor.execute('SELECT * FROM users WHERE id = ?', (user_id,))
            user_data = cursor.fetchone()

            if user_data:
                # Print the user data for debugging
                
                unlocked_achievements = {columns[i]: user_data[i]
                                 for i in range(len(columns)) if columns[i].startswith('achievement-')}            
                return jsonify(unlocked_achievements)
            else:
                return jsonify({'success': False, 'message': 'User not found'})
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)})


@app.route('/newcard', methods=['GET'])
def newCard():
    return render_template('newCard.html')


# Logout
@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('login'))


@app.errorhandler(404)
def page_not_found(e):
    if 'user_id' not in session:
        return render_template('404_noUser.html'), 404
    else:
        return render_template('404_user.html', email=session['email'], firstname=session['first_name'] or ""), 404


if __name__ == '__main__':
    app.run(host="0.0.0.0", port="5000", debug=True)
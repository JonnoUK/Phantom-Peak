
/*  
ACHIEVEMENT GALLERY
*/

const debug = true;


const achievementCategories = [
    {
        name: "Number of Cards",
        included: [1, 2, 3,4,5,6,7]
    },
    {
        name: "Seasonal Achivements",
        included: [11]
    },
    {
        name: "It's A Secret",
        included: []
    },
];

const achievements = [
    {
        id: 0,
        icon: "https://www.phantompeak.com/media/mumhxtre/trophyplaceholder.png",
        name: "My First Trail",
        visible: false
    },
    {
        id: 1,
        icon: "https://www.phantompeak.com/media/mumhxtre/trophyplaceholder.png",
        name: "My First Trail",
        visible: false
    },
    {
        id: 2,
        icon: "https://www.phantompeak.com/media/mumhxtre/trophyplaceholder.png",
        name: "My First Trail",
        visible: false
    },
    {
        id: 3,
        icon: "https://www.phantompeak.com/media/mumhxtre/trophyplaceholder.png",
        name: "My First Trail",
        visible: false
    },
    {
        id: 4,
        icon: "https://www.phantompeak.com/media/mumhxtre/trophyplaceholder.png",
        name: "My First Trail",
        visible: false
    },
    {
        id: 5,
        icon: "https://www.phantompeak.com/media/mumhxtre/trophyplaceholder.png",
        name: "My First Trail",
        visible: false
    },
    {
        id: 6,
        icon: "https://www.phantompeak.com/media/mumhxtre/trophyplaceholder.png",
        name: "My First Trail",
        visible: false
    },
    {
        id: 7,
        icon: "https://www.phantompeak.com/media/mumhxtre/trophyplaceholder.png",
        name: "My First Trail",
        visible: false
    },
    {
        id: 11,
        icon: "https://www.phantompeak.com/media/akcj4t0v/summers-peak-achievement.png",
        name: "Summer's Peak",
        visible: false
    },



];

function createAchievement(icon, name, id) {
    const achievement = document.createElement("div");
    achievement.className = "achievement locked";
    achievement.setAttribute("data-id", id);

    const front = document.createElement("div");
    front.className = "front";
	const frontImg = document.createElement("img");
	frontImg.src = icon;
	front.appendChild(frontImg);

    const itsName = document.createElement("div");
	itsName.className = "achievement-name";
	itsName.innerText = name;
	front.appendChild(itsName);

    achievement.appendChild(front);

    if(debug) {
        console.log(achievement);
    }
    return achievement;
}



function loadAchievements() {
    const container = document.getElementById("achievementContainer");
    container.innerHTML = ""; // Clear existing cards
    const categorySelector = document.querySelector(".custom-select-trigger");
    const chosenCategory = categorySelector.dataset.value;
    if (debug) {
    console.log(chosenCategory);
    }

    let achievementsToLoad = [];

    achievementCategories.forEach((obj) => {
        if (obj.name === chosenCategory) {
            achievementsToLoad = obj.included;
        }
    });

    // Check if cardsToLoad is defined
    if (!achievementsToLoad) {
        console.error("No achievements found for the chosen category.");
        return;
    }

    // Load the trails and create cards
    let counter = 1;
    achievements.forEach((ach) => {
        if(ach.visible === true) {
            if (achievementsToLoad.includes(ach.id)) {
                const card = createAchievement(ach.icon, ach.name, ach.id);
                container.appendChild(card);
                /*
                if (cardConfirmations[trail.id]) {
                    setTimeout(() => {
                    flipCard(card);
                    card.classList.remove("locked"); // Remove 'locked' class if the card is already confirmed
                    const cardNumber = card.querySelector(".card-number");
                    if (cardNumber) {
                        cardNumber.style.display = "none"; // Hide the card number if the card is already confirmed
                    }
                    }, counter * 120); // Animate flip with delay
                    counter += 1;
                }*/
            }
        }
    });
}

/* EVENT LISTENER */

document.addEventListener("DOMContentLoaded", () => {
    const categoryDropdown = document.getElementById("achievements");
    const categoryWrapper = categoryDropdown.closest('.custom-select-wrapper');
    const categoryTrigger = categoryDropdown.querySelector(".custom-select-trigger");
    const optionsContainer = categoryDropdown.querySelector(".custom-options");

    // Populate season options
    achievementCategories.forEach((obj) => {
        const option = document.createElement("div");
        option.className = "custom-option";
        option.textContent = obj.name;
        option.dataset.value = obj.name;
        option.addEventListener("click", () => {
            categoryTrigger.textContent = obj.name;
            categoryTrigger.dataset.value = obj.name;
            optionsContainer.classList.remove("open");
            loadAchievements(); // Update cards when a season is selected
        });
        optionsContainer.appendChild(option);
    });

    // Toggle dropdown for seasons
    categoryWrapper.addEventListener("click", (e) => {
        categoryDropdown.classList.toggle("open");
        e.stopPropagation();
    });
	
    // Close season dropdown if clicked outside
    document.addEventListener("click", (e) => {
        if (!categoryWrapper.contains(e.target)) {
            categoryDropdown.classList.remove("open");
        }
    });

    if (!categoryTrigger.dataset.value) {
        categoryTrigger.textContent = achievementCategories[0].name;
        categoryTrigger.dataset.value = achievementCategories[0].name;
        console.log(categoryTrigger.dataset.value);
    }

    fetch('/get-achievements')
		.then(response => response.json())
		.then(data => {
			if (data.success === false) {
				console.error(data.message);
				return;
			}
			// Loop through the flipped card data
			Object.keys(data).forEach(key => {
				const achievementId = key.replace('achievement-', '');  // Extract the card number from the column name
				if (data[key] === 1) {
                    console.log(achievements[achievementId]);
					if(achievements[achievementId] != undefined) {
						achievements[achievementId].visible = true;
					}
				}
			});
            loadAchievements();
		})
		.catch(error => {
			console.error('Error fetching achievements: ', error);
		});

});



/*
Lovingly created by Jonathan Taylor on behalf of Phantom Peak
*/
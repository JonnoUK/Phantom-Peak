function shakeElement(element) {
	element.classList.add('shake');
	
	// Remove the class after animation ends to allow retriggering
	element.addEventListener('animationend', () => {
	  element.classList.remove('shake');
	}, { once: true });
  }

const debug = true;
if (!debug) {
	setTimeout(() => {
		console.log("Hello there inquisitive person! What are you doing looking here?");
		setTimeout(() => {
			console.error("Klacky now has access to your browsing history...");
			setTimeout(() => {
				console.log("haha - got you now meatbag!");
				setTimeout(() => {
					console.log("not really... but it'd be fun right?");
				}, 2000);
			}, 2000);
		}, 2000);
	}, 2000);

	
}

const charMap = "11111111111111111111111";
const allChars =
	"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-=_+[]{}|;:,.<>?";

let tooltipTimeout;
let autosaveTimeout;
let isAutosavePending = false;

let achievementNotificationTimeout;
let achievementNotificationPending = false;

const isMobile = window.innerWidth <= 600;
let specialTried = false;

const season = [
	{
		name: "Starlit Summer - 2024",
		cardsIncluded: [45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55]
	},
	{
		name: "Festival of Innovation - 2024",
		cardsIncluded: [34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44]
	},
	//{
	//	name: "Wintermas - 2023",
	//	cardsIncluded: [23,24,25,26,27,28,29,30,31,32,33]
	//},
	//{
	//	name: "Hallowed Peak - 2023",
	//	cardsIncluded: [12,13,14,15,16,17,18,19,20,21,22]
	//},
	{
		name: "Summer's Peak - 2023",
		cardsIncluded: [1,2,3,4,5,6,7,8,9,10,11]
	},
	{
		name: "Limited Edition Experiences",
		cardsIncluded: [123,124,125,126]
	}
];


const purpleBK = "https://www.phantompeak.com/media/rw3jzdsn/summer-2024_back-purple.png";
const greenBK = "https://www.phantompeak.com/media/wy5bkpan/summer-2024_back-green.png";
const redBK = "https://www.phantompeak.com/media/c5pj2jcn/summer-2024_back-red.png";

const trails = [
	{
		id: 1,
		front: "https://www.phantompeak.com/media/2o1okkdk/trl_card_s05_c01_rgb_1370_x_2079.png",
		back: greenBK,
		name: "Dead Ringer",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 2,
		front: "https://www.phantompeak.com/media/xwvbwkd0/trl_card_s05_c02_rgb_1370_x_2079.png",
		back: purpleBK,
		name: "Radio Killed The Video Star",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 3,
		front: "https://www.phantompeak.com/media/fw2lbeqa/trl_card_s05_c03_rgb_1370_x_2079.png",
		back: greenBK,
		name: "Ei8ght",
		specialCard: false,
		requiredCards: []
		},
		{
		id: 4,
		front: "https://www.phantompeak.com/media/niwb41in/trl_card_s05_c04_rgb_1370_x_2079.png",
		back: redBK,
		name: "The Diamar Code",
		specialCard: false,
		requiredCards: []
		},
		{
		id: 5,
		front: "https://www.phantompeak.com/media/0lljsgpt/trl_card_s05_c05_rgb_1370_x_2079.png",
		back: purpleBK,
		name: "Under Refurbishment",
		specialCard: false,
		requiredCards: []
		},
		{
		id: 6,
		front: "https://www.phantompeak.com/media/nxyb33pz/trl_card_s05_c06_rgb_1370_x_2079.png",
		back: greenBK,
		name: "The Dramatic Question",
		specialCard: false,
		requiredCards: []
		},
		{
		id: 7,
		front: "https://www.phantompeak.com/media/kwodgjai/trl_card_s05_c07_rgb_1370_x_2079.png",
		back: redBK,
		name: "Littlefield's Little Package",
		specialCard: false,
		requiredCards: []
		},
	{
		id: 8,
		front: "https://www.phantompeak.com/media/xrpha4cv/trl_card_s05_c08_rgb_1370_x_2079.png",
		back: purpleBK,
		name: "Platman Beyond",
		specialCard: false,
		requiredCards: []
		},
	{
		id: 9,
		front: "https://www.phantompeak.com/media/kmfjiteg/trl_card_s05_c09_rgb_1370_x_2079.png",
		back: greenBK,
		name: "Keep Your Friends Close",
		specialCard: false,
		requiredCards: []
		},
	{
		id: 10,
		front: "https://www.phantompeak.com/media/o5pd2cfr/trl_card_s05_c10_rgb_1370_x_2079.png",
		back: redBK,
		name: "Twirling Shadows",
		specialCard: false,
		requiredCards: []
		},
	{
		id: 11,
		front: "https://www.phantompeak.com/media/1wjnhqcj/trl_card_s05_c11_rgb_1370_x_2079.png",
		back: purpleBK,
		name: "Angels and Diamant",
		specialCard: true,
		requiredCards: [1,2,3,4,5,6,7,8,9,10]
		},

	{
		id: 34,
		front: "https://www.phantompeak.com/media/u1phlqy5/spring-2024_front_001.png",
		back: greenBK,
		name: "Chrono the Wonder Dog",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 35,
		front: "https://www.phantompeak.com/media/hsbhdm0c/spring-2024_front_002.png",
		back: "https://www.phantompeak.com/media/c5pj2jcn/summer-2024_back-red.png",
		name: "Some Body To Love",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 36,
		front: "https://www.phantompeak.com/media/rk5d1d2l/spring-2024_front_003.png",
		back:
			"https://www.phantompeak.com/media/rw3jzdsn/summer-2024_back-purple.png",
		name: "The Fear Factory",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 37,
		front: "https://www.phantompeak.com/media/vpupywxj/spring-2024_front_004.png",
		back: "https://www.phantompeak.com/media/wy5bkpan/summer-2024_back-green.png",
		name: "Scaly Underbelly",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 38,
		front: "https://www.phantompeak.com/media/kmsbxnte/spring-2024_front_005.png",
		back: "https://www.phantompeak.com/media/c5pj2jcn/summer-2024_back-red.png",
		name: "The Phantom of The Picture House",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 39,
		front: "https://www.phantompeak.com/media/jggltj1n/spring-2024_front_006.png",
		back:
			"https://www.phantompeak.com/media/rw3jzdsn/summer-2024_back-purple.png",
		name: "The Very Best",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 40,
		front: "https://www.phantompeak.com/media/ynwnz0oj/spring-2024_front_007.png",
		back: "https://www.phantompeak.com/media/wy5bkpan/summer-2024_back-green.png",
		name: "The Devil You Know",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 41,
		front: "https://www.phantompeak.com/media/trjgn2kk/spring-2024_front_008.png",
		back: "https://www.phantompeak.com/media/c5pj2jcn/summer-2024_back-red.png",
		name: "Sweet Disposition",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 42,
		front: "https://www.phantompeak.com/media/nbpnl10f/spring-2024_front_009.png",
		back:
			"https://www.phantompeak.com/media/rw3jzdsn/summer-2024_back-purple.png",
		name: "The Last Laugh",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 43,
		front: "https://www.phantompeak.com/media/41lhc0o1/spring-2024_front_010.png",
		back: "https://www.phantompeak.com/media/wy5bkpan/summer-2024_back-green.png",
		name: "Nothing But The Truth",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 44,
		front: "https://www.phantompeak.com/media/2apdy3o5/spring-2024_front_011.png",
		back: "https://www.phantompeak.com/media/c5pj2jcn/summer-2024_back-red.png",
		name: "Straight To The Moon",
		specialCard: true,
		requiredCards: [34,35,36,37,38,39,40,41,42,43]
	},

	{
		id: 45,
		front: "https://www.phantompeak.com/media/pfnpc4ed/summer-2024_front-01.png",
		back: "https://www.phantompeak.com/media/wy5bkpan/summer-2024_back-green.png",
		name: "Time After Time",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 46,
		front: "https://www.phantompeak.com/media/3vzhhnrd/summer-2024_front-02.png",
		back: "https://www.phantompeak.com/media/c5pj2jcn/summer-2024_back-red.png",
		name: "The Real Thing",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 47,
		front: "https://www.phantompeak.com/media/lhlhlgiw/summer-2024_front-03.png",
		back:
			"https://www.phantompeak.com/media/rw3jzdsn/summer-2024_back-purple.png",
		name: "Whiskers In The Dark",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 48,
		front: "https://www.phantompeak.com/media/0gidqgsc/summer-2024_front-04.png",
		back: "https://www.phantompeak.com/media/wy5bkpan/summer-2024_back-green.png",
		name: "Pocket Dial",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 49,
		front: "https://www.phantompeak.com/media/10pl4gj0/summer-2024_front-05.png",
		back: "https://www.phantompeak.com/media/c5pj2jcn/summer-2024_back-red.png",
		name: "Skytanic",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 50,
		front: "https://www.phantompeak.com/media/5wncwohg/summer-2024_front-06.png",
		back:
			"https://www.phantompeak.com/media/rw3jzdsn/summer-2024_back-purple.png",
		name: "Post Nuclear Family",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 51,
		front: "https://www.phantompeak.com/media/uiqnxqwv/summer-2024_front-07.png",
		back: "https://www.phantompeak.com/media/wy5bkpan/summer-2024_back-green.png",
		name: "Death And Taxes",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 52,
		front: "https://www.phantompeak.com/media/vp1ghio0/summer-2024_front-08.png",
		back: "https://www.phantompeak.com/media/c5pj2jcn/summer-2024_back-red.png",
		name: "Failure To Launch",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 53,
		front: "https://www.phantompeak.com/media/woghmosp/summer-2024_front-09.png",
		back:
			"https://www.phantompeak.com/media/rw3jzdsn/summer-2024_back-purple.png",
		name: "Cosmic Conjurations",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 54,
		front: "https://www.phantompeak.com/media/rj4iaalc/summer-2024_front-10.png",
		back: "https://www.phantompeak.com/media/wy5bkpan/summer-2024_back-green.png",
		name: "Love Is Blind",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 55,
		front: "https://www.phantompeak.com/media/odjfxdjm/summer-2024_front-11.png",
		back: "https://www.phantompeak.com/media/c5pj2jcn/summer-2024_back-red.png",
		name: "Ocean Of Silence",
		specialCard: true,
		requiredCards: [45,46,47,48,49,50,51,52,53,54]
	},
	{
		id: 123,
		front: "https://www.phantompeak.com/media/24pjywsn/spring-2024_front_vip.png",
		back:
			"https://www.phantompeak.com/media/rw3jzdsn/summer-2024_back-purple.png",
		name: "The Broken Chalice",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 124,
		front: "https://www.phantompeak.com/media/ni5lsi5w/trail_card_-_vip_02_front.png",
		back:
			"https://www.phantompeak.com/media/thmp4rut/trail_card_-_vip_02_back.png",
		name: "Tea with Pocket",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 125,
		front: "https://www.phantompeak.com/media/jj5fmxpt/trail_card_-_vip_01_front.png",
		back:
			"https://www.phantompeak.com/media/wy5bkpan/summer-2024_back-green.png",
		name: "Phantom Peak Explorers",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 126,
		front: "https://www.phantompeak.com/media/4drl3v1y/trail_card_-_vip_03_front.png",
		back: purpleBK,
		name: "Jonacocktail",
		specialCard: false,
		requiredCards: []
		},

	
];

let mobileClicks = Array(trails.length).fill(0);
let cardConfirmations = Array(trails.length).fill(false);

function showTooltip() {
	const tooltip = document.createElement("div");
	tooltip.id = "tooltip";
	tooltip.innerText = "Hint: double-click on a trail card to unlock it";
	tooltip.style.position = "fixed";
	tooltip.style.top = "50%";
	tooltip.style.left = "50%";
	tooltip.style.transform = "translate(-50%, -50%)";
	tooltip.style.textAlign = "center";
	tooltip.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
	tooltip.style.color = "white";
	tooltip.style.padding = "10px";
	tooltip.style.borderRadius = "5px";
	tooltip.style.zIndex = "1000";
	document.body.appendChild(tooltip);
}

function showAchievement(achievementName) {
	if (!achievementNotificationPending) {
		achievementNotificationPending = true;
		const tooltip = document.createElement("div");
		tooltip.id = "tooltip";
		tooltip.innerText = "You've unlocked a new achievement: " + achievementName;
		tooltip.style.position = "fixed";
		tooltip.style.top = "50%";
		tooltip.style.left = "50%";
		tooltip.style.transform = "translate(-50%, -50%)";
		tooltip.style.textAlign = "center";
		tooltip.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
		tooltip.style.color = "white";
		tooltip.style.padding = "10px";
		tooltip.style.borderRadius = "5px";
		tooltip.style.zIndex = "1000";
		tooltip.style.opacity = "0";
		tooltip.style.transition = "opacity 1s";
		document.body.appendChild(tooltip);

		setTimeout(() => {
			document.getElementById("tooltip").style.opacity = 1;
			setTimeout(() => {
				document.getElementById("tooltip").style.opacity = 0;
			}, 3500);
		}, 500);

		setTimeout(() => {
			document.body.removeChild(tooltip);
			achievementNotificationPending = false;
		}, 5000);
	} else {
		achievementNotificationTimeout = setTimeout(() => {
			showAchievement(achievementName);
		}, 2750);
	}
}

function hideTooltip() {
	const tooltip = document.getElementById("tooltip");
	clearTimeout(tooltipTimeout);
	if (tooltip) {
		tooltip.remove();
	}
}

function resetTooltipTimer() {
	clearTimeout(tooltipTimeout);
	if (isMobile) {
		tooltipTimeout = setTimeout(showTooltip, 15000);
	}
}

function createCard(backImage, frontImage, name, id) {
	const card = document.createElement("div");
	card.className = "card locked"; // Start with 'locked' class
	card.setAttribute("data-id", id); // Add data-id attribute
	card.onclick = () => handleCardClick(card, id);

	const back = document.createElement("div");
	back.className = "back";
	const backImg = document.createElement("img");
	backImg.src = backImage;
	back.appendChild(backImg);

	const front = document.createElement("div");
	front.className = "front";
	const frontImg = document.createElement("img");
	frontImg.src = frontImage;
	front.appendChild(frontImg);

	const cardNumber = document.createElement("div");
	cardNumber.className = "card-number";
	cardNumber.innerText = name;
	back.appendChild(cardNumber); // Append to back

	card.appendChild(back);
	card.appendChild(front);

	const confirmBox = document.createElement("div");
	confirmBox.className = "confirm-box";
	confirmBox.style.display = "none";
	confirmBox.innerHTML = `
        <p>Completed this trail?</p>
        <button onclick="confirmCard(${id}, true, event)">Yes</button>
        <button onclick="confirmCard(${id}, false, event)">No</button>
    `;
	back.appendChild(confirmBox);

	return card;
}

function handleCardClick(card, id) {
	hideTooltip();
	const cardNumber = card.querySelector(".card-number");
	const confirmBox = card.querySelector(".confirm-box");

	if (isMobile) {
		hideTooltip();
		mobileClicks[id]++;
		if (mobileClicks[id] === 1) {
			setTimeout(() => {
				mobileClicks[id] = 0;
			}, 300); // Reset click count after 300ms
			return;
		}
	}
	if (!cardConfirmations[id]) {
		confirmBox.style.display = "block";
		cardNumber.style.display = "none";
	} else {
		flipCard(card);
	}
}

function confirmCard(id, confirmed, event) {
	event.stopPropagation();
	const card = document.querySelector(`.card[data-id="${id}"]`);
	const confirmBox = card.querySelector(".confirm-box");
	const cardNumber = card.querySelector(".card-number");
	confirmBox.style.display = "none";
	cardNumber.style.display = "block";

	if (confirmed) {
		const trail = trails.find((trail) => trail.id === id);

		if (trail.specialCard) {
			const requiredCards = trail.requiredCards;
			const allUnlocked = requiredCards.every(
				(requiredId) => cardConfirmations[requiredId]
			);
			if (!allUnlocked) {
				shakeElement(card);
				cardNumber.innerText = "Complete Them All First";
				cardNumber.style = "color: red;";
				setTimeout(() => {
					updateSpecialCardName();
				  }, 5000); 
				return;
			}

		}
		if (debug) {
			console.log("Tourist has unlocked trail " + id); 
		}
		cardConfirmations[id] = true;
		flipCard(card);
		cardNumber.style.display = "none"; // Hide the card number when confirmed
		card.classList.remove("locked"); // Remove 'locked' class when card is unlocked

		// Check and update the special card's name if all required cards are unlocked
		updateSpecialCardName();
		checkAchievements();		
		saveFlippedCards();
	}
}

function updateSpecialCardName() {
  trails.forEach((trail) => {
    if (trail.specialCard) {
      const card = document.querySelector(`.card[data-id="${trail.id}"]`);
      if (!card) {
		if(debug) {
       		console.log(`Special Card with id ${trail.id} not on this page so has skipped loading.`);
		}
        return;
      }
      const cardNumber = card.querySelector(".card-number");
      if (!cardNumber) {
        console.error(`Card number element for card with id ${trail.id} not found`);
        return;
      }

      const requiredCards = trail.requiredCards;
      const allUnlocked = requiredCards.every((id) => cardConfirmations[id]);

      if (allUnlocked) {
		if (debug) {
        	console.log("Secret Trail Name Unlocked");
		}
        cardNumber.innerText = trail.name;
		cardNumber.style = "color: black;";
      } else {
		if (debug) {
			console.log(allUnlocked);
			console.log(requiredCards);
		}
        cardNumber.innerText = "???";
		cardNumber.style = "color: black;";
      }
    }
  });
}

function flipCard(card) {
	card.classList.toggle("flipped");
}

function loadCards() {
  	const container = document.getElementById("cardContainer");
	container.innerHTML = ""; // Clear existing cards
	const seasonTrigger = document.querySelector(".custom-select-trigger");
	const chosenSeason = seasonTrigger.dataset.value;
	if (debug) {
	  console.log(chosenSeason);
	}

  	let cardsToLoad = [];

	// Find the chosen season and get its cards
	season.forEach((seasonObj) => {
    	if (seasonObj.name === chosenSeason) {
     		cardsToLoad = seasonObj.cardsIncluded;
    	}
	});

	// Check if cardsToLoad is defined
	if (!cardsToLoad) {
		console.error("No cards found for the chosen season.");
		return;
	}

	// Load the trails and create cards
	let counter = 1;
	trails.forEach((trail) => {
		if (cardsToLoad.includes(trail.id)) {
		const card = createCard(trail.back, trail.front, trail.name, trail.id);
		container.appendChild(card);
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
      	}
    }
  });
  updateSpecialCardName();
}

function saveFlippedCards() {
	if (!isAutosavePending) {
		if(debug) {
			console.log("Autosaving...");
		}
		isAutosavePending = true;
		const flippedCards = trails.reduce((acc, trail) => {
        	acc[trail.id] = cardConfirmations[trail.id] ? 1 : 0; // Make sure it's either 1 or 0 (not undefined)
        	return acc;
    	}, {});

   		Object.keys(flippedCards).forEach((key) => {
        	if (flippedCards[key] === undefined) {
           		flippedCards[key] = null; 
        	}
    	});

    	fetch('/save-flipped-cards', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(flippedCards)
    	})
   		.then(response => response.json())
   		.then(data => {
        	if (data.success) {
				/*
           		console.log('Flipped cards saved successfully!');
				const btn = document.getElementById('save-btn');
				btn.innerText = "";
				btn.classList.add('loading');
				btn.disabled = true;  // Disable the button while saving
		  
				setTimeout(() => {
					btn.classList.remove('loading');
					btn.textContent = "Saved!";
		  
					setTimeout(() => {
						btn.textContent = "Save Collection";
						btn.disabled = false;  // Re-enable the button
					}, 1500); 
				}, 1000);
				*/
				if (debug) {
					console.log("%cAutosave complete, saved to database", "color: green");
				}
       		} else {
            	console.error('Failed to save flipped cards.');
				document.getElementById('errorMessage').classList.remove('hidden');
				document.getElementById('savedMessage').classList.add('hidden');
        	}
    	})
    	.catch(error => {
        	console.error('Error:', error);
    	});
		autosaveTimeout = setTimeout(() => {
			isAutosavePending = false;
		}, 5000);
	} else {
		if (debug) {
			console.log("Autosave is pending: " + isAutosavePending);
		}
		autosaveTimeout = setTimeout(() => {
			console.log("Triggering delayed Autosave");
			saveFlippedCards();
		}, 5000);
	}
}

let totalCardsToUnlock;

const achievements = [
	{
		id: 0,
		achievementName: "My First Trail",
		numberOfCardsRequiredToUnlock: 1,
		specificCardsRequiredToUnlock: [],
		unlocked: false
	},
	{
		id: 1,
		achievementName: "Three's A Crowd",
		numberOfCardsRequiredToUnlock: 3,
		specificCardsRequiredToUnlock: [],
		unlocked: false
	},
	{
		id: 2,
		achievementName: "Halfway There",
		numberOfCardsRequiredToUnlock: 5,
		specificCardsRequiredToUnlock: [],
		unlocked: false
	},
	{
		id: 3,
		achievementName: "Go The Distance",
		numberOfCardsRequiredToUnlock: 10,
		specificCardsRequiredToUnlock: [],
		unlocked: false
	},
	{
		id: 4,
		achievementName: "150% Effort",
		numberOfCardsRequiredToUnlock: 15,
		specificCardsRequiredToUnlock: [],
		unlocked: false
	},
	{
		id: 5,
		achievementName: "Double The Goal",
		numberOfCardsRequiredToUnlock: 20,
		specificCardsRequiredToUnlock: [],
		unlocked: false
	},
	{
		id: 6,
		achievementName: "Triple The Goal",
		numberOfCardsRequiredToUnlock: 30,
		specificCardsRequiredToUnlock: [],
		unlocked: false
	},
	{
		id: 7,
		achievementName: "Starlit Summer",
		numberOfCardsRequiredToUnlock: 0,
		specificCardsRequiredToUnlock: [45,46,47,48,49,50,51,52,53,54,55],
		unlocked: false
	},
	{
		id: 8,
		achievementName: "Secret Keeper",
		numberOfCardsRequiredToUnlock: 0,
		specificCardsRequiredToUnlock: [123, 124, 125, 126],
		numberOfAnyRequiredToUnlock: 0,
		anyOfTheseToUnlock: [],
		unlocked: false
	},
	{
		id: 9,
		achievementName: "Found A Secret",
		numberOfCardsRequiredToUnlock: 0,
		specificCardsRequiredToUnlock: [],
		numberOfAnyRequiredToUnlock: 1,
		anyOfTheseToUnlock: [123, 124, 125, 126],
		unlocked: false
	},
	{
		id: 10,
		achievementName: "Festival of Innovation",
		numberOfCardsRequiredToUnlock: 0,
		specificCardsRequiredToUnlock: [34,35,36,37,38,39,40,41,42,43,44],
		unlocked: false
	},
	{
		id: 11,
		achievementName: "Summer's Peak",
		numberOfCardsRequiredToUnlock: 0,
		specificCardsRequiredToUnlock: [1,2,3,4,5,6,7,8,9,10,11],
		unlocked: false
	},
]

function checkAchievements() {
    let achievementObject = {};

    Object.keys(trails).forEach(id => {
        achievementObject[id] = { 
            trailId: trails[id].id,
        };
    });



    let totalUnlockCount = 0;
	totalCardsToUnlock = trails.length;

    Object.keys(cardConfirmations).forEach(id => {
		if(cardConfirmations[id]) {
			totalUnlockCount += 1;
			Object.keys(achievementObject).forEach(achId => {

				if(Number(id) === Number(achievementObject[achId].trailId)) {
					achievementObject[achId].trailUnlocked = true;
				}
			});
		}
    });

    if (debug) {
        console.log("Total cards unlocked: " + totalUnlockCount);
    }
	console.log(achievements);
	Object.keys(achievements).forEach(id => {
		if (achievements[id].unlocked == false) {
			let totalCheck = false;
			let specificCheck = false;
			let anyCheck = false;

			let anyCheckRequired = achievements[id].numberOfAnyRequiredToUnlock;
			let requiredNumber = achievements[id].numberOfCardsRequiredToUnlock;

			if (requiredNumber <= totalUnlockCount) {
				totalCheck = true;
			} else {
				totalCheck = false;
			}

				let totalTrailsToCheck = achievements[id].specificCardsRequiredToUnlock.length;
				let correctTrails = 0;
				if (debug && totalTrailsToCheck > 0) {
					console.log("trails to check is " + totalTrailsToCheck);
				}


				achievements[id].specificCardsRequiredToUnlock.forEach(trailId => {
					Object.keys(achievementObject).forEach(achId => {
						if (achievementObject[achId].trailId === trailId) {
							if (achievementObject[achId].trailUnlocked) {
								correctTrails += 1;
							}
						} 
					});

					
				});
				if (correctTrails === totalTrailsToCheck) {
					specificCheck = true;
				}


				if (anyCheckRequired > 0) {
					let anyOfTheseTrails = achievements[id].anyOfTheseToUnlock;
					let anyTrailCount = 0;

					let i = 0;
					while (i < anyOfTheseTrails.length) {
						Object.keys(achievementObject).forEach(achId => {
							if (achievementObject[achId].trailId === anyOfTheseTrails[i]) {
								if (achievementObject[achId].trailUnlocked) {
									anyTrailCount += 1;
								}
							}
						});
						i++;
					}
					if (anyTrailCount >= anyCheckRequired) {
						anyCheck = true;
					}
				} else {
					anyCheck = true;
				}
			
			
				
				if (totalCheck && specificCheck && anyCheck) {
					if (debug) {
						console.log("unlocked " + achievements[id].achievementName);
					}
					achievements[id].unlocked = true;
					showAchievement(achievements[id].achievementName);
					saveAchievements();
				}
			}
		});
}


function saveAchievements() {
    const unlockedAchievements = [];

	let totalUnlocked = 0;
    Object.keys(achievements).forEach(key => {
        if (achievements[key].unlocked) {
            unlockedAchievements.push({
                id: achievements[key].id,
                unlocked: 1
            });
			totalUnlocked ++;
        }
    });

	if (totalUnlocked > 0) {
		fetch('/save-achievements', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(unlockedAchievements)
		})
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.json();
		})
		.then(data => {
			if (data.success) {
				if (debug) {
					console.log("%cAchievement Save complete, saved to database", "color: green");
				}
			} else {
				console.error('Failed to save achievements:', data.message);
			}
		})
		.catch(error => {
			console.error('Error:', error);
		});
	} else {
		console.log("No Achievements To Save");
	}
}





/* 
EVENT LISTENER
*/
document.addEventListener("DOMContentLoaded", () => {
    const seasonDropdown = document.getElementById("seasonDropdown");
    const seasonWrapper = seasonDropdown.closest('.custom-select-wrapper');
    const seasonTrigger = seasonDropdown.querySelector(".custom-select-trigger");
    const optionsContainer = seasonDropdown.querySelector(".custom-options");

    // Populate season options
    season.forEach((seasonObj) => {
        const option = document.createElement("div");
        option.className = "custom-option";
        option.textContent = seasonObj.name;
        option.dataset.value = seasonObj.name;
        option.addEventListener("click", () => {
            seasonTrigger.textContent = seasonObj.name;
            seasonTrigger.dataset.value = seasonObj.name;
            optionsContainer.classList.remove("open");
            loadCards(); // Update cards when a season is selected
        });
        optionsContainer.appendChild(option);
    });

    // Toggle dropdown for seasons
    seasonWrapper.addEventListener("click", (e) => {
        seasonDropdown.classList.toggle("open");
        e.stopPropagation();
    });
	
    // Close season dropdown if clicked outside
    document.addEventListener("click", (e) => {
        if (!seasonWrapper.contains(e.target)) {
            seasonDropdown.classList.remove("open");
			resetTooltipTimer();
        }
    });

    if (!seasonTrigger.dataset.value) {
        seasonTrigger.textContent = season[0].name;
        seasonTrigger.dataset.value = season[0].name;
    }

    updateSpecialCardName();
    resetTooltipTimer();


	/* Fetch cards from database*/ 
	fetch('/get-flipped-cards')
    .then(response => response.json())
    .then(data => {
        if (data.success === false) {
            console.error(data.message);
            return;
        }
        // Loop through the flipped card data
        Object.keys(data).forEach(key => {
            const cardId = key.replace('trail-', '');  // Extract the card number from the column name
            if (data[key] === 1) {
				cardConfirmations[cardId] = true;
            }
        });
		loadCards();
    })
    .catch(error => {
        console.error('Error fetching flipped cards:', error);
    });

	setTimeout(() => {
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
				console.log(key);
				if (data[key] === 1) {
					if(achievements[achievementId] != undefined) {
						achievements[achievementId].unlocked = true;
					}
				}
			});
		})
		.catch(error => {
			console.error('Error fetching achievements: ', error);
		});
	}, 500);

	setTimeout(() => {
		checkAchievements();
	}, 1000);
});
console.log("Loaded Trail Collection File");
const charMap = "OB@-51'WV34C3+%GZyIS5ab";
const allChars =
	"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-=_+[]{}|;:,.<>?";

let tooltipTimeout;
const isMobile = window.innerWidth <= 600;

const season = [
	{
		name: "Starlit Summer - 2024",
		cardsIncluded: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
	},
	{
		name: "Festival of Innovation - 2024",
		cardsIncluded: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 23]
	}
];

const trails = [
	{
		id: 1,
		front: "https://www.phantompeak.com/media/u1phlqy5/spring-2024_front_001.png",
		back: "https://www.phantompeak.com/media/wy5bkpan/summer-2024_back-green.png",
		name: "Chrono the Wonder Dog",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 2,
		front: "https://www.phantompeak.com/media/hsbhdm0c/spring-2024_front_002.png",
		back: "https://www.phantompeak.com/media/c5pj2jcn/summer-2024_back-red.png",
		name: "Some Body To Love",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 3,
		front: "https://www.phantompeak.com/media/rk5d1d2l/spring-2024_front_003.png",
		back:
			"https://www.phantompeak.com/media/rw3jzdsn/summer-2024_back-purple.png",
		name: "The Fear Factory",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 4,
		front: "https://www.phantompeak.com/media/vpupywxj/spring-2024_front_004.png",
		back: "https://www.phantompeak.com/media/wy5bkpan/summer-2024_back-green.png",
		name: "Scaly Underbelly",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 5,
		front: "https://www.phantompeak.com/media/kmsbxnte/spring-2024_front_005.png",
		back: "https://www.phantompeak.com/media/c5pj2jcn/summer-2024_back-red.png",
		name: "The Phantom of The Picture House",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 6,
		front: "https://www.phantompeak.com/media/jggltj1n/spring-2024_front_006.png",
		back:
			"https://www.phantompeak.com/media/rw3jzdsn/summer-2024_back-purple.png",
		name: "The Very Best",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 7,
		front: "https://www.phantompeak.com/media/ynwnz0oj/spring-2024_front_007.png",
		back: "https://www.phantompeak.com/media/wy5bkpan/summer-2024_back-green.png",
		name: "The Devil You Know",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 8,
		front: "https://www.phantompeak.com/media/trjgn2kk/spring-2024_front_008.png",
		back: "https://www.phantompeak.com/media/c5pj2jcn/summer-2024_back-red.png",
		name: "The Last Laugh",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 9,
		front: "https://www.phantompeak.com/media/nbpnl10f/spring-2024_front_009.png",
		back:
			"https://www.phantompeak.com/media/rw3jzdsn/summer-2024_back-purple.png",
		name: "Sweet Disposition",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 10,
		front: "https://www.phantompeak.com/media/41lhc0o1/spring-2024_front_010.png",
		back: "https://www.phantompeak.com/media/wy5bkpan/summer-2024_back-green.png",
		name: "Nothing But The Truth",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 11,
		front: "https://www.phantompeak.com/media/2apdy3o5/spring-2024_front_011.png",
		back: "https://www.phantompeak.com/media/c5pj2jcn/summer-2024_back-red.png",
		name: "Straight To The Moon",
		specialCard: true,
		requiredCards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	},

	{
		id: 12,
		front: "https://www.phantompeak.com/media/pfnpc4ed/summer-2024_front-01.png",
		back: "https://www.phantompeak.com/media/wy5bkpan/summer-2024_back-green.png",
		name: "Time After Time",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 13,
		front: "https://www.phantompeak.com/media/3vzhhnrd/summer-2024_front-02.png",
		back: "https://www.phantompeak.com/media/c5pj2jcn/summer-2024_back-red.png",
		name: "The Real Thing",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 14,
		front: "https://www.phantompeak.com/media/lhlhlgiw/summer-2024_front-03.png",
		back:
			"https://www.phantompeak.com/media/rw3jzdsn/summer-2024_back-purple.png",
		name: "Whiskers In The Dark",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 15,
		front: "https://www.phantompeak.com/media/0gidqgsc/summer-2024_front-04.png",
		back: "https://www.phantompeak.com/media/wy5bkpan/summer-2024_back-green.png",
		name: "Pocket Dial",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 16,
		front: "https://www.phantompeak.com/media/10pl4gj0/summer-2024_front-05.png",
		back: "https://www.phantompeak.com/media/c5pj2jcn/summer-2024_back-red.png",
		name: "Skytanic",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 17,
		front: "https://www.phantompeak.com/media/5wncwohg/summer-2024_front-06.png",
		back:
			"https://www.phantompeak.com/media/rw3jzdsn/summer-2024_back-purple.png",
		name: "Post Nuclear Family",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 18,
		front: "https://www.phantompeak.com/media/uiqnxqwv/summer-2024_front-07.png",
		back: "https://www.phantompeak.com/media/wy5bkpan/summer-2024_back-green.png",
		name: "Death And Taxes",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 19,
		front: "https://www.phantompeak.com/media/vp1ghio0/summer-2024_front-08.png",
		back: "https://www.phantompeak.com/media/c5pj2jcn/summer-2024_back-red.png",
		name: "Failure To Launch",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 20,
		front: "https://www.phantompeak.com/media/woghmosp/summer-2024_front-09.png",
		back:
			"https://www.phantompeak.com/media/rw3jzdsn/summer-2024_back-purple.png",
		name: "Cosmic Conjurations",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 21,
		front: "https://www.phantompeak.com/media/rj4iaalc/summer-2024_front-10.png",
		back: "https://www.phantompeak.com/media/wy5bkpan/summer-2024_back-green.png",
		name: "Love Is Blind",
		specialCard: false,
		requiredCards: []
	},
	{
		id: 22,
		front: "https://www.phantompeak.com/media/odjfxdjm/summer-2024_front-11.png",
		back: "https://www.phantompeak.com/media/c5pj2jcn/summer-2024_back-red.png",
		name: "Ocean Of Silence",
		specialCard: true,
		requiredCards: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
	},
	{
		id: 23,
		front: "https://www.phantompeak.com/media/24pjywsn/spring-2024_front_vip.png",
		back:
			"https://www.phantompeak.com/media/rw3jzdsn/summer-2024_back-purple.png",
		name: "The Broken Chalice",
		specialCard: false,
		requiredCards: []
	}
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
				alert("You need to unlock more cards first...");
				return;
			}
		}

		console.log("Tourist has unlocked trail " + id);
		cardConfirmations[id] = true;
		flipCard(card);
		cardNumber.style.display = "none"; // Hide the card number when confirmed
		card.classList.remove("locked"); // Remove 'locked' class when card is unlocked

		// Check and update the special card's name if all required cards are unlocked
		updateSpecialCardName();
	}
}

function updateSpecialCardName() {
	trails.forEach((trail) => {
		if (trail.specialCard) {
			const card = document.querySelector(`.card[data-id="${trail.id}"]`);
			const cardNumber = card.querySelector(".card-number");
			const requiredCards = trail.requiredCards;
			const allUnlocked = requiredCards.every((id) => cardConfirmations[id]);

			if (allUnlocked) {
				console.log("all unlocked");
				cardNumber.innerText = trail.name;
			} else {
				cardNumber.innerText = "???";
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
	const seasonSelector = document.getElementById("seasonSelector");
	const chosenSeason =
		seasonSelector.options[seasonSelector.selectedIndex].value;
	console.log(chosenSeason);

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
					if (cardNumber) cardNumber.style.display = "none"; // Hide the card number if the card is already confirmed
				}, counter * 120); // Animate flip with delay
				counter += 1;
			}
		}
	});
	updateSpecialCardName();
}

function getRandomChar(excludeChars) {
	let randomChar;
	do {
		randomChar = allChars.charAt(Math.floor(Math.random() * allChars.length));
	} while (excludeChars.includes(randomChar));
	return randomChar;
}

function saveCards() {
	const code = trails
		.map((trail) =>
			cardConfirmations[trail.id] ? charMap[trail.id - 1] : getRandomChar(charMap)
		)
		.join("");
	document.getElementById("codeInput").value = code;
	localStorage.setItem(code, JSON.stringify({ confirmations: code }));
	setCookie("savedCode", code, 365); // Save the code as a cookie
}

function loadCardsByCode(code) {
	if (code.length !== trails.length) {
		alert("Invalid code length.");
		return;
	}

	trails.forEach((trail, index) => {
		cardConfirmations[trail.id] = charMap.includes(code[index]);
	});

	loadCards();
}

function loadCardsFromCode() {
	const code = document.getElementById("codeInput").value;
	loadCardsByCode(code);
}

function getCookies() {
	return document.cookie
		.split(";")
		.map((cookie) => cookie.trim())
		.reduce((acc, cookie) => {
			const [name, value] = cookie.split("=");
			acc[name] = decodeURIComponent(value);
			return acc;
		}, {});
}

function getMostRecentCookie() {
	const cookies = getCookies();
	if ("savedCode" in cookies) {
		return cookies["savedCode"];
	}
	return null;
}

function setCookie(name, value, days) {
	const expires = new Date(Date.now() + days * 864e5).toUTCString();
	document.cookie =
		name + "=" + encodeURIComponent(value) + "; expires=" + expires + "; path=/";
}

function clearCards() {
	// Reset card confirmations
	cardConfirmations = Array(trails.length).fill(false);

	// Clear the input box
	document.getElementById("codeInput").value = "";

	// Clear the container and reload cards in their initial state
	const container = document.getElementById("cardContainer");
	container.innerHTML = "";
	loadCards();
	updateSpecialCardName();
}

document.addEventListener("DOMContentLoaded", () => {
	var selectSeason = document.getElementById("seasonSelector");
	for (var i = 0; i < season.length; i++) {
		var opt = season[i].name;
		var el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		selectSeason.appendChild(el);
	}

	const mostRecentCode = getMostRecentCookie();
	if (mostRecentCode) {
		document.getElementById("codeInput").value = mostRecentCode;
		loadCardsByCode(mostRecentCode);
	} else {
		loadCards();
	}
	updateSpecialCardName();
	resetTooltipTimer();
});
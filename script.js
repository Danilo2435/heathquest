// Inicijalizacija korisničkih podataka
let loggedInUser = sessionStorage.getItem("loggedInUser");

if (!loggedInUser) {
    window.location.href = 'login.html';
}


let userData = JSON.parse(localStorage.getItem(loggedInUser)) || { level: 1, progress: 0 };

// Inicijalizacija izazova
const physicalChallenges = [
    "Уради 10 склекова",
    "Прошетај 30 минута",
    "Попиј 8 чаша воде",
    "Уради 15 чучњева",
    "Спавај најмање 8 сати",
    "Уради 10 трбушњака",
    "Поједи 2 јабуке",
    "Поједи 1 банану",
    "Трчи 10 минута",
    "Уради вежбе истезања у трајању од 10 минута"
];

const mentalChallenges = [
    "Запиши 3 позитивне мисли",
    "Одмори очи 5 минута",
    "Уради технику дубоког дисања",
    "Пробај кратку медитацију/молитву",
    "Прочитај 20 страница књиге",
    "Слушај музику 30 минута",
    "Причај са пријатељем",
    "Уреди собу/стан",
    "Пиши дневник",
    "Остави мобилни 2 сата"
];

let level = userData.level;
let progress = userData.progress;

// Funkcija za generisanje izazova
function generateChallenges() {
    if (physicalChallenges.length > 0) {
        const randomIndex = Math.floor(Math.random() * physicalChallenges.length);
        document.getElementById("physical-text").textContent = physicalChallenges[randomIndex];
    } else {
        document.getElementById("physical-text").textContent = "Сви физички изазови су завршени!";
    }

    if (mentalChallenges.length > 0) {
        const randomIndex = Math.floor(Math.random() * mentalChallenges.length);
        document.getElementById("mental-text").textContent = mentalChallenges[randomIndex];
    } else {
        document.getElementById("mental-text").textContent = "Сви ментални изазови су завршени!";
    }
}

// Funkcija za završavanje izazova
function completeChallenge(type) {
    const progressBar = document.getElementById("progress-bar");
    const levelDisplay = document.getElementById("level");

    // Ažuriranje napretka
    progress += type === "physical" ? 30 : 20;

    if (progress >= 100) {
        progress = 0;
        level++;
        alert("Нови ниво! Сјајно!");
    }

    progressBar.value = progress;
    levelDisplay.textContent = level;

    // Uklanjanje ispunjenog izazova i generisanje novog
    if (type === "physical") {
        removeAndGeneratePhysicalChallenge();
    } else if (type === "mental") {
        removeAndGenerateMentalChallenge();
    }

    saveProgress();
    alert("Сјајан посао!");
}

// Funkcija za uklanjanje ispunjenog fizičkog izazova i generisanje novog
function removeAndGeneratePhysicalChallenge() {
    const challengeText = document.getElementById("physical-text").textContent;
    const index = physicalChallenges.indexOf(challengeText);
    if (index !== -1) {
        physicalChallenges.splice(index, 1);
    }

    // Generiši novi fizički izazov
    if (physicalChallenges.length > 0) {
        const randomIndex = Math.floor(Math.random() * physicalChallenges.length);
        document.getElementById("physical-text").textContent = physicalChallenges[randomIndex];
    } else {
        document.getElementById("physical-text").textContent = "Сви физички изазови су завршени!";
    }
}

// Funkcija za uklanjanje ispunjenog mentalnog izazova i generisanje novog
function removeAndGenerateMentalChallenge() {
    const challengeText = document.getElementById("mental-text").textContent;
    const index = mentalChallenges.indexOf(challengeText);
    if (index !== -1) {
        mentalChallenges.splice(index, 1);
    }

    // Generiši novi mentalni izazov
    if (mentalChallenges.length > 0) {
        const randomIndex = Math.floor(Math.random() * mentalChallenges.length);
        document.getElementById("mental-text").textContent = mentalChallenges[randomIndex];
    } else {
        document.getElementById("mental-text").textContent = "Сви ментални изазови су завршени!";
    }
}

// Funkcija za čuvanje napretka u localStorage
function saveProgress() {
    userData.level = level;
    userData.progress = progress;
    localStorage.setItem(loggedInUser, JSON.stringify(userData));
}

// Funkcija za učitavanje napretka korisnika
function loadProgress() {
    if (loggedInUser) {
        userData = JSON.parse(localStorage.getItem(loggedInUser)) || { level: 1, progress: 0 };
        level = userData.level;
        progress = userData.progress;
    }

    document.getElementById("progress-bar").value = progress;
    document.getElementById("level").textContent = level;
}

// Funkcija za odjavu korisnika
function logoutUser() {
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "login.html"; // Preusmeravanje na login stranicu
}

window.onload = function () {
    loadProgress();
    generateChallenges();
};


// Funkcija za završavanje izazova
function completeChallenge(type) {
    const progressBar = document.getElementById("progress-bar");
    const levelDisplay = document.getElementById("level");

    // Ažuriranje napretka
    progress += type === "physical" ? 30 : 20;

    if (progress >= 100) {
        progress = 0;
        level++;
        
        // Reprodukuj zvuk kada korisnik pređe na novi nivo
        const levelUpSound = document.getElementById("level-up-sound");
        levelUpSound.play(); // Pokreće zvuk

        // Ovdje nema poruke, samo zvuk!
    }

    progressBar.value = progress;
    levelDisplay.textContent = level;

    // Uklanjanje ispunjenog izazova i generisanje novog
    if (type === "physical") {
        removeAndGeneratePhysicalChallenge();
    } else if (type === "mental") {
        removeAndGenerateMentalChallenge();
    }

    saveProgress();
}

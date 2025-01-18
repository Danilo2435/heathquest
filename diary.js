// Prvo ćemo dobiti korisničko ime iz sessionStorage
let loggedInUser = sessionStorage.getItem("loggedInUser");

// Funkcija za učitavanje prethodnog unosa iz dnevnika
function loadDiaryEntry() {
    const diaryEntry = localStorage.getItem(loggedInUser + '-diary');
    if (diaryEntry) {
        document.getElementById("diary-entry").value = diaryEntry;
    }
}

// Funkcija za čuvanje unosa u dnevniku
function saveDiaryEntry() {
    const diaryEntry = document.getElementById("diary-entry").value;
    
    if (diaryEntry.trim() === "") {
        alert("Молимо вас, унесите текст у дневник!");
        return;
    }

    // Spremamo unos u localStorage pod imenom korisnika
    localStorage.setItem(loggedInUser + '-diary', diaryEntry);

    // Prikazujemo poruku korisniku
    document.getElementById("saved-message").textContent = "Твој запис је успешно сачуван!";
}

// Pozivamo funkciju da učitamo prethodni unos prilikom učitavanja stranice
window.onload = loadDiaryEntry;

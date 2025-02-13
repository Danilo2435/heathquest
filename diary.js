let loggedInUser = sessionStorage.getItem("loggedInUser");


if (!loggedInUser) {
    window.location.href = 'login.html';
}


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

    localStorage.setItem(loggedInUser + '-diary', diaryEntry);

    document.getElementById("saved-message").textContent = "Твој запис је успешно сачуван!";
}

window.onload = loadDiaryEntry;

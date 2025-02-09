// Registracija novog korisnika
function registerUser() {
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;
    const errorMessage = document.getElementById("error-message");

    // Proveriti da li korisnik već postoji
    if (localStorage.getItem(username)) {
        errorMessage.textContent = "Корисничко име већ постоји. Покушајте неко друго.";
        return;
    }

    // Spremiti korisnika u localStorage
    const userData = {
        password: password,
        level: 1,
        progress: 0
    };
    localStorage.setItem(username, JSON.stringify(userData));

    // Uloguj korisnika
    sessionStorage.setItem('loggedInUser', username);

    alert("Успешно сте се регистровали!");
    window.location.href = "feelings.html"; // Preusmeravanje na glavnu stranicu
}

// Prijava korisnika
function loginUser() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    const errorMessage = document.getElementById("error-message");

    // Proveriti da li korisnik postoji i da li je lozinka tačna
    const userData = JSON.parse(localStorage.getItem(username));

    if (!userData || userData.password !== password) {
        errorMessage.textContent = "Неправилно корисничко име или лозинка.";
        return;
    }

    // Spremiti korisnika u sessionStorage
    sessionStorage.setItem("loggedInUser", username);

    alert("Добро дошли назад!");
    window.location.href = "feelings.html"; // Preusmeravanje na glavnu stranicu
}

// Proveriti da li je korisnik već prijavljen
function checkLoggedInUser() {
    const loggedInUser = sessionStorage.getItem("loggedInUser");
    if (loggedInUser) {
        document.getElementById("auth-section").innerHTML = `<h2>Добро дошли, ${loggedInUser}!</h2><p>Спремни сте за почетак. <a href="index.html">Прелазак на главну страницу</a></p>`;
    }
}

// Kada se učita stranica, proveriti da li je korisnik prijavljen
window.onload = checkLoggedInUser;

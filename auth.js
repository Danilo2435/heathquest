// Registracija novog korisnika
function registerUser() {
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;
    const errorMessage = document.getElementById("error-message");

    if (localStorage.getItem(username)) {
        errorMessage.textContent = "Корисничко име већ постоји. Покушајте неко друго.";
        return;
    }

    const userData = {
        password: password,
        level: 1,
        progress: 0
    };
    localStorage.setItem(username, JSON.stringify(userData));

    // Uloguj korisnika
    sessionStorage.setItem('loggedInUser', username);

    alert("Успешно сте се регистровали!");
    window.location.href = "feelings.html"; 
}

// Prijava korisnika
function loginUser() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    const errorMessage = document.getElementById("error-message");


    const userData = JSON.parse(localStorage.getItem(username));

    if (!userData || userData.password !== password) {
        errorMessage.textContent = "Неправилно корисничко име или лозинка.";
        return;
    }

    sessionStorage.setItem("loggedInUser", username);

    alert("Добро дошли назад!");
    window.location.href = "feelings.html"; 
}

// Proveriti da li je korisnik već prijavljen
function checkLoggedInUser() {
    const loggedInUser = sessionStorage.getItem("loggedInUser");
    if (loggedInUser) {
        document.getElementById("auth-section").innerHTML = `<h2>Добро дошли, ${loggedInUser}!</h2><p>Спремни сте за почетак. <a href="index.html">Прелазак на главну страницу</a></p>`;
    }
}

window.onload = checkLoggedInUser;

// Inicijalizacija korisničkih podataka
let loggedInUser = sessionStorage.getItem("loggedInUser");

if (!loggedInUser) {
    window.location.href = 'login.html';
}
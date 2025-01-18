// Читање напредка из LocalStorage при учитавању странице
window.onload = function() {
    const savedLevel = localStorage.getItem("level");
    const savedProgress = localStorage.getItem("progress");

    if (savedLevel) {
        document.getElementById("level").textContent = savedLevel;
    }
    if (savedProgress) {
        document.getElementById("progress-bar").value = savedProgress;
    }
};

// Функција за завршетак изазова
function completeChallenge(challengeType) {
    let level = parseInt(localStorage.getItem("level") || 1);
    let progress = parseInt(localStorage.getItem("progress") || 0);

    // Ажурирај напредак и ниво
    if (challengeType === "physical" || challengeType === "mental") {
        progress += 10; // Додај напредак за сваки завршени изазов

        if (progress >= 100) {
            progress = 100;
            level += 1; // Ако напредак достигне 100%, порасте ниво
        }

        // Спреми нови напредак и ниво
        localStorage.setItem("progress", progress);
        localStorage.setItem("level", level);

        // Ажурирај интерфејс
        document.getElementById("progress-bar").value = progress;
        document.getElementById("level").textContent = level;
    }
}

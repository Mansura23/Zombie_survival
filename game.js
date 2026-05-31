const player = document.getElementById("player");
const gameArea = document.getElementById("gameArea");

const playBtn = document.getElementById("playBtn");

let gameRunning = false;

playBtn.addEventListener("click", () => {

    document
        .getElementById("startScreen")
        .classList.add("hidden");

    gameRunning = true;
});
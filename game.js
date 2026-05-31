const playBtn = document.getElementById("playBtn");
const player = document.getElementById("player");

let gameRunning = false;

let playerX = 285;
let playerY = 185;

const playerSpeed = 5;

const keys = {};

document.addEventListener("keydown", (event) => {
    keys[event.key.toLowerCase()] = true;
});

document.addEventListener("keyup", (event) => {
    keys[event.key.toLowerCase()] = false;
});

function updatePlayer() {

    if (keys["w"] || keys["arrowup"]) {
        playerY -= playerSpeed;
    }

    if (keys["s"] || keys["arrowdown"]) {
        playerY += playerSpeed;
    }

    if (keys["a"] || keys["arrowleft"]) {
        playerX -= playerSpeed;
    }

    if (keys["d"] || keys["arrowright"]) {
        playerX += playerSpeed;
    }

    // boundaries

    if (playerX < 0) {
        playerX = 0;
    }

    if (playerX > 570) {
        playerX = 570;
    }

    if (playerY < 0) {
        playerY = 0;
    }

    if (playerY > 370) {
        playerY = 370;
    }

    player.style.left = playerX + "px";
    player.style.top = playerY + "px";
}

function gameLoop() {

    if (!gameRunning) {
        return;
    }

    updatePlayer();

    requestAnimationFrame(gameLoop);
}

playBtn.addEventListener("click", () => {

    document
        .getElementById("startScreen")
        .classList.add("hidden");

    gameRunning = true;

    gameLoop();
});
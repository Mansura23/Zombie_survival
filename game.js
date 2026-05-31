const playBtn = document.getElementById("playBtn");
const restartBtn = document.getElementById("restartBtn");
const player = document.getElementById("player");

let gameRunning = false;

let playerX = 285;
let playerY = 185;

const speed = 5;
const keys = {};

let lastScoreTime = 0;

// INPUT
document.addEventListener("keydown", (e) => {
  keys[e.key.toLowerCase()] = true;
});

document.addEventListener("keyup", (e) => {
  keys[e.key.toLowerCase()] = false;
});

// PLAYER
function updatePlayer() {
  if (!gameRunning) return;

  if (keys["w"] || keys["arrowup"]) playerY -= speed;
  if (keys["s"] || keys["arrowdown"]) playerY += speed;
  if (keys["a"] || keys["arrowleft"]) playerX -= speed;
  if (keys["d"] || keys["arrowright"]) playerX += speed;

  playerX = Math.max(0, Math.min(570, playerX));
  playerY = Math.max(0, Math.min(370, playerY));

  player.style.left = playerX + "px";
  player.style.top = playerY + "px";
}

// COLLISION
function collides(a, b) {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
}

// CHECK COLLISION
function checkCollision() {
  const p = { x: playerX, y: playerY, width: 30, height: 30 };

  for (let z of zombies) {
    if (collides(p, z)) {
      gameOver();
    }
  }
}

// GAME OVER
function gameOver() {
  gameRunning = false;

  document.getElementById("gameOverScreen").classList.remove("hidden");
  document.getElementById("finalScore").textContent = score;

  if (score > bestScore) {
    bestScore = score;
    localStorage.setItem("bestScore", bestScore);
    document.getElementById("bestScore").textContent = bestScore;
  }
}

// RESTART
function restartGame() {
  gameRunning = false;

  zombies.forEach(z => z.element.remove());
  zombies.length = 0;

  playerX = 285;
  playerY = 185;

  score = 0;
  lastScoreTime = 0;

  document.getElementById("score").textContent = score;
  document.getElementById("gameOverScreen").classList.add("hidden");

  startGame();
}

function updateZombies() {
  for (let z of zombies) {

    // 🕒 direction change (random movement)
    z.changeDirTimer++;

    if (z.changeDirTimer > 60) { // ~1 sec
      z.dirX = (Math.random() - 0.5);
      z.dirY = (Math.random() - 0.5);
      z.changeDirTimer = 0;
    }

    // 🎯 small attraction to player (not full chase)
    let dx = playerX - z.x;
    let dy = playerY - z.y;

    // normalize
    let dist = Math.sqrt(dx * dx + dy * dy);

    let chaseX = (dx / dist) * 1.3;
    let chaseY = (dy / dist) * 1.3;

    // 🎮 final movement = random + weak chase
    z.x += (z.dirX * z.speed) + chaseX;
    z.y += (z.dirY * z.speed) + chaseY;

    // boundaries
    z.x = Math.max(0, Math.min(570, z.x));
    z.y = Math.max(0, Math.min(370, z.y));

    z.element.style.left = z.x + "px";
    z.element.style.top = z.y + "px";
  }
}

// LOOP
function gameLoop(timestamp) {
  if (!gameRunning) return;
  updateZombies();
  updatePlayer();
  checkCollision();

  if (timestamp - lastScoreTime > 1000) {
    score++;
    document.getElementById("score").textContent = score;
    lastScoreTime = timestamp;
  }

  requestAnimationFrame(gameLoop);
}

// START
function startGame() {
  gameRunning = true;
  createZombie();
  requestAnimationFrame(gameLoop);
}

// EVENTS
playBtn.addEventListener("click", () => {
  document.getElementById("startScreen").classList.add("hidden");
  startGame();
});

restartBtn.addEventListener("click", restartGame);
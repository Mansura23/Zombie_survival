# 🧟 Zombie Survival

A browser-based survival game built using **HTML, CSS, and Vanilla JavaScript**. The objective is simple: survive for as long as possible while avoiding zombies that move around the arena. Your score increases over time, and your highest score is saved using `localStorage`.

---

# 🎮 Live Demo

**GitHub Pages:**
[https://mansura23.github.io/Zombie_survival/](https://mansura23.github.io/Zombie_survival/)

---

# 📋 Project Planning

## Excalidraw Design

[https://excalidraw.com/#json=lYmCtV-zRKnJeUzxLi4xJ,G2UkV-VLsW_9UTH689zn9w](https://excalidraw.com/#json=lYmCtV-zRKnJeUzxLi4xJ,G2UkV-VLsW_9UTH689zn9w)

## Trello Board

[https://trello.com/b/JcPThiXn/gameproject](https://trello.com/b/JcPThiXn/gameproject)

---

# 🎯 Game Description

Zombie Survival is a simple arcade-style survival game. The player controls a character inside a confined arena while trying to avoid zombies. The longer the player survives, the higher the score becomes. If a zombie collides with the player, the game ends.

The game was created as part of a Frontend Fundamentals mini-project using only Vanilla JavaScript, HTML, and CSS without external libraries or frameworks.

---

# 👾 Entities

## Player

* Controlled by the keyboard
* Moves inside the game area
* Cannot leave the arena boundaries

## Zombie

* Enemy entity
* Spawns inside the arena
* Moves with randomized behavior and attempts to reach the player
* Causes Game Over on collision

## Score System

* Tracks survival time
* Increases while the game is running
* Displays current score and best score

---

# 🎮 How to Play

## Controls

| Action     | Key   |
| ---------- | ----- |
| Move Up    | W / ↑ |
| Move Down  | S / ↓ |
| Move Left  | A / ← |
| Move Right | D / → |

---

## Objective

Survive as long as possible while avoiding zombies.

Every second you stay alive increases your score.

---

## Lose Condition

The game ends immediately when a zombie collides with the player.

---

## Win Condition

There is no final victory screen.

The goal is to survive as long as possible and achieve a new high score.

---

# ⚙️ Tech Decisions

This project uses a **Functional Programming** approach.

### Why Functional?

* The game is relatively small and simple.
* Using functions made the game loop easier to manage.
* Game state can be handled with variables and helper functions.
* Functional structure allowed faster development and easier debugging.

Examples:

* `updatePlayer()`
* `updateZombies()`
* `checkCollision()`
* `gameOver()`
* `restartGame()`

---

# 🏗️ Project Structure

```text
zombie-survival/
│
├── index.html
├── style.css
├── game.js
├── zombie.js
├── score.js
├── README.md
└── AI_DIARY.md
```

---

# 🔄 Game Flow

### Start Screen

The player starts on the start screen and presses the Play button.

↓

### Gameplay

* Player movement is enabled
* Zombies move around the arena
* Score increases over time
* Collision detection runs continuously

↓

### Game Over

* Collision occurs
* Final score is displayed
* High score is updated if necessary
* Restart button becomes available

↓

### Restart

The player can restart the game without refreshing the page.

---

# 💾 Persistence

The game stores the highest score using the browser's `localStorage`.

Example:

```javascript
if (score > bestScore) {
    localStorage.setItem("bestScore", score);
}
```

This allows the best score to remain available even after closing the browser.

---

# 🤖 AI Usage

AI tools were used during development for:

* Debugging JavaScript issues
* Understanding game loop architecture
* Improving zombie movement logic
* Improving CSS styling
* Reviewing project structure

Tools used:

* ChatGPT
* Claude
* Gemini

---

# 📓 AI Diary

AI development log:

**AI_DIARY.md**

---

# 🐛 Known Bugs

* Zombie movement may occasionally feel unpredictable due to randomized behavior.
* Difficulty balancing can still be improved.
* Only one zombie type currently exists.
* No mobile controls are implemented.

---

# 🚀 Future Improvements

Possible future features:

* Multiple zombie types
* Increasing difficulty levels
* Sound effects and background music
* Power-ups and temporary boosts
* Health system
* More advanced enemy AI
* Mobile support

---

# ✅ Features Implemented

* Player movement (WASD + Arrow Keys)
* Zombie enemy entity
* Collision detection
* Score system
* High score using localStorage
* Start screen
* Game over screen
* Restart without page refresh
* Responsive game loop using `requestAnimationFrame`
* Functional programming structure

---

# 👩‍💻 Author

**Mensura Badalova**

Frontend Fundamentals Mini Project – Vanilla JavaScript Zombie Survival Game.

excalidraw ------ https://excalidraw.com/#json=lYmCtV-zRKnJeUzxLi4xJ,G2UkV-VLsW_9UTH689zn9w

trello ------ https://trello.com/b/JcPThiXn/gameproject

game ---- https://mansura23.github.io/Zombie_survival/

# Define the content of the README.md file
readme_content = """# 🧟 Zombie Survival — Game Design & Documentation

A fast-paced, 2D web-based survival game built with vanilla HTML5, CSS3, and JavaScript. Navigate an arena, avoid relentless zombies, track high scores via `localStorage`, and test your survival reflexes as difficulty scales over time.

---

## 🗺️ Project Overview & Architecture

This project is structured cleanly into independent modules separating concerns for game orchestration, physics/AI rendering, scoring, and UI views. Below is the blueprint of the system's screen flows, file structure, canvas metrics, and underlying mathematical AI logic.

### 🔄 Screen Flow Workflow
The game cycles through three primary states managed through state variables and conditional UI toggles:
1. 🏁 **Start Screen:** Displays the game title and an interactive **"Play!"** button. Triggering this initiates the game loop and spawns actors.
2. 🕹️ **Game Running:** The core dynamic state. The player moves, zombies spawn and dynamically track the player, scores increment in real-time, and collision detectors run continuously.
3. 💀 **Game Over Screen:** Triggered instantly upon a collision. Freezes all movement loops, evaluates high-score boundaries, stores the maximum score natively, and exposes a **"Restart"** button to loop back to the *Game Running* state.

---

## 📂 Project File Structure


```

```text
File successfully created at: README.md

```text
zombie-survival/
├── index.html   # Main entry point: establishes the DOM, HUD, Canvas container, and screens
├── style.css    # Core visuals: absolute layout configuration, boundary styling, animations
├── game.js      # Central orchestrator: implements the main loop, handles global inputs, updates ticks
├── zombie.js    # AI & Entity Spawner: vector tracking math, velocity manipulation, enemy arrays
├── score.js     # State manager: tracking score logic, high-score fetching, localStorage commits
└── README.md    # System technical manual and documentation (this file)

```

---

## 🎛️ Game Specifications & Controls

### 🎮 How to Play (Objective)

Your single directive is to **Survive**. You control a player character trapped inside a locked arena. Relentless zombies spawn from the map boundaries and hunt your exact position. Every second you stay alive increments your score. If a zombie touches your boundary, it is instant **Game Over**.

### ⌨️ Input Mappings

The engine listens to continuous keyboard events across dual mappings for optimized player accessibility:

* **Move Up:** `W` key / `↑` Arrow key
* **Move Left:** `A` key / `←` Arrow key
* **Move Down:** `S` key / `↓` Arrow key
* **Move Right:** `D` key / `→` Arrow key

---

## 🧠 Core Engine Mechanics & AI Logic

### 📐 Vector-Based Chase AI

Zombies do not wander randomly; they utilize precise Euclidean distance vectors to recalculate their trajectories toward the player on every single frame refresh.

```math
dx = Player.x - Zombie.x
dy = Player.y - Zombie.y

```

To prevent variable movement speeds during diagonal tracking, a true vector distance is computed to normalize the velocity tracking:

```math
dist = \sqrt{dx^2 + dy^2}

```

The zombie then modifies its precise absolute coordinate positions according to a normalized delta multiplied by its current velocity scale:

```math
Zombie.x += \left(\frac{dx}{dist}\right) \times speed
Zombie.y += \left(\frac{dy}{dist}\right) \times speed

```

### 📈 Scaling Difficulty

* **Baseline Arena:** A locked `600px × 400px` relative container box. Actors are constrained via absolute coordinates (`top`/`left`) and checked against maximum boundary limits to prevent clipping outside the map.
* **Adaptive Velocity Scaling:** To prevent static patterns, a game tick interval executes every **2 seconds**, scaling the baseline zombie tracking velocity by a progressive step variable:
```math
speed = speed + 0.2

```



---

## 📊 Score & Data Persistence

* **Survival Reward:** For each elapsed second (`1000ms`), the scoring engine increments the current run score by **+1 point**.
* **Data Persistence Layer:** When a collision state evaluates to true, the engine accesses native browser environments:
```javascript
// Engine high-score validation pattern
if (currentScore > localStorage.getItem('zombie_highscore')) {
    localStorage.setItem('zombie_highscore', currentScore);
}

```


* **HUD Rendering:** Current score and all-time highest scores are injected directly into structured elements at the head of the canvas view during runtime.

---

## 🎯 MVP Feature Checklist & Roadmap

* [x] **Player Movement Framework:** Full 4-way spatial positioning using WASD and Arrow key interceptors.
* [x] **Relentless AI Spawn:** Zombie spawning sequence executing pathfinding via normalized 2D vectors.
* [x] **Collision & Lifecycle Engine:** Precise overlapping bounding-box detection triggering Game Over modal overlays and system resets.

### 🚀 Future Roadmap Extensions

1. 👥 **Horde Multipliers:** Spawn additional zombies incrementally as score thresholds are broken.
2. 🗺️ **Dynamic Infinite Maps:** Expand viewport boundaries with a scrollable background canvas camera layout.
3. ⚡ **Tactical Power-Ups:** Shield bubbles, temporary velocity bursts, and freeze items spawning randomly in the arena.
"""


```

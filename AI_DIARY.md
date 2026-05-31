📘 AI_DIARY (correct version — balanced)
2026-05-31 - Full project development: game setup, debugging and feature improvements

What I did:
I designed the main idea of a Zombie Survival game and planned the structure using HTML, CSS, and Vanilla JavaScript. I created the project setup with separate files for game logic, zombies, and scoring system. I implemented the initial game layout including player, enemy area, start screen, and game over screen. I also wrote the basic player movement using keyboard controls (WASD / Arrow keys) and built the main game loop structure using requestAnimationFrame. Later I implemented collision detection, scoring system, restart functionality, and localStorage-based high score system. I also adjusted zombie speed and improved game balance.

How AI helped me:
I used AI tools to help structure the project more efficiently and to improve my understanding of game architecture. AI helped me split the project into multiple JavaScript files (zombie.js, score.js, game.js) and suggested better organization of game logic. It also helped me debug an issue where the player movement was not working because the startGame() function was not correctly triggering the game loop. Additionally, AI helped improve zombie behavior by replacing static movement with random movement combined with slight attraction toward the player. It also suggested CSS improvements to make the game look more like a real arcade-style game.

What problems I faced:
At first, the game did not work correctly because the game loop was not properly started from the startGame() function. Player movement was not responsive due to missing or incorrectly connected function calls. Zombie behavior was also too simple and made the game unbalanced. Initially zombies either moved too slowly or directly followed the player, making the gameplay either too easy or too predictable. The UI design was also very basic and did not feel like a complete game.

How I fixed it:
I fixed the game loop issue by ensuring that startGame() properly initializes requestAnimationFrame(gameLoop). I improved player movement responsiveness by correcting event handling and update logic. I balanced zombie speed by increasing it and later improving AI behavior with random movement and partial player tracking. I also enhanced the CSS design using gradients, glow effects, and animations to create a more immersive arcade-style environment.

Time spent: ~2–3 hours

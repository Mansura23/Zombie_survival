# AI Diary

## AI Tools Used

- ChatGPT
- Claude
- Gemini

I used these tools for debugging, understanding JavaScript concepts, improving game structure, and getting suggestions for CSS design.

2026-05-31 - Player movement was not working

What I asked the AI:
I asked why my player was not moving when pressing the keyboard keys.

What it gave me:
The AI suggested checking the game loop and keyboard event listeners.

What was wrong:
The game loop was not being started correctly because an important function was not called.

How I fixed it:
I connected the start game logic correctly and ensured the game loop started with requestAnimationFrame().

Time lost: ~30 minutes

2026-05-31 - Collision detection issue

What I asked the AI:
I asked how to detect collisions between the player and zombies.

What it gave me:
The AI suggested using AABB (Axis-Aligned Bounding Box) collision detection.

What was wrong:
The collision function existed but was not properly integrated into the game loop.

How I fixed it:
I added collision checks during every frame update and triggered Game Over when a collision occurred.

Time lost: ~20 minutes

2026-05-31 - Zombie speed balancing

What I asked the AI:
I asked how to make the game more challenging because zombies were too slow.

What it gave me:
The AI suggested increasing zombie speed values.

What was wrong:
The player could easily avoid zombies because enemy movement was too slow.

How I fixed it:
I increased zombie speed multiple times and tested different values until the gameplay felt balanced.

Time lost: ~15 minutes

2026-05-31 - Zombie movement felt predictable

What I asked the AI:
I asked how to make zombie movement more interesting.

What it gave me:
The AI suggested adding random movement instead of always directly following the player.

What was wrong:
Zombies always moved toward the player's exact position, making gameplay repetitive.

How I fixed it:
I added random movement behavior while still allowing zombies to generally move toward the player.

Time lost: ~20 minutes

2026-05-31 - CSS design improvements

What I asked the AI:
I asked for suggestions to improve the visual appearance of the game.

What it gave me:
The AI suggested a darker theme, glow effects, improved HUD styling, and better buttons.

What was wrong:
The original design looked very basic and did not feel like a complete game.

How I fixed it:
I redesigned the interface using improved colors, gradients, shadows, and better layout organization.

Time lost: ~25 minutes

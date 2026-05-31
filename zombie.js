const zombies = [];

function createZombie() {
    const zombie = document.createElement("div");

    zombie.classList.add("zombie");

    zombie.style.left = "50px";
    zombie.style.top = "50px";

    document
        .getElementById("gameArea")
        .appendChild(zombie);

    zombies.push(zombie);
}
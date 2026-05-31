const zombies = [];

function createZombie() {
    const zombie = document.createElement("div");

    zombie.classList.add("zombie");

    zombie.style.left = "0px";
    zombie.style.top = Math.random() * 370 + "px";

    document.getElementById("gameArea").appendChild(zombie);

    zombies.push(zombie);
}
const zombies = [];

function createZombie() {
  const el = document.createElement("div");
  el.classList.add("zombie");

  const z = {
    element: el,
    x: Math.random() * 570,
    y: Math.random() * 370,
    width: 30,
    height: 30,

    // 👇 NEW AI VALUES
    speed: 4,
    dirX: (Math.random() - 0.5),
    dirY: (Math.random() - 0.5),
    changeDirTimer: 0
  };

  el.style.left = z.x + "px";
  el.style.top = z.y + "px";

  document.getElementById("gameArea").appendChild(el);

  zombies.push(z);
}
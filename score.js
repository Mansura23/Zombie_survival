let score = 0;

let bestScore =
    Number(localStorage.getItem("bestScore")) || 0;

document.getElementById("bestScore").textContent =
    bestScore;
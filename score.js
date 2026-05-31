let score = 0;

let bestScore = Number(localStorage.getItem("bestScore")) || 0;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("bestScore").textContent = bestScore;
});
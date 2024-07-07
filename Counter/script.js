const counterText = document.querySelector(".counter");
const decrBtn = document.getElementById("decr-btn");
const resetBtn = document.getElementById("reset-btn");
const incrBtn = document.getElementById("incr-btn");

let count = 0;

counterText.innerHTML = count;
decrBtn.addEventListener("click", () => {
  counterText.textContent = --count;
});
resetBtn.addEventListener("click", () => {
  counterText.textContent = count = 0;
});

incrBtn.addEventListener("click", () => {
  counterText.textContent = ++count;
});

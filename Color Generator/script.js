const printhexColor = document.querySelector(".hex-color");

const hexBtn = document.querySelector(".hex-btn");
const hexContainer = document.querySelector(".hex-container");

hexBtn.addEventListener("click", () => {
  let hexColor = "0123456789abcdef";

  let splittedHexColor = hexColor.split("");
  let finalHexColor = "#";
  for (let i = 0; i < 6; i++) {
    finalHexColor +=
      splittedHexColor[Math.floor(Math.random() * splittedHexColor.length)];
  }
  printhexColor.innerHTML = `${finalHexColor}`;
  hexContainer.style.background = `${finalHexColor}`;
});

const redInput = document.querySelector(".red-input");
const greenInput = document.querySelector(".green-input");
const blueInput = document.querySelector(".blue-input");

redInput.addEventListener("change", (e) => {
  redInputValue = e.target.value;
  console.log(redInputValue);
});
greenInput.addEventListener("change", (e) => {
  var greenInputValue = e.target.value;
  console.log(greenInputValue);
});
blueInput.addEventListener("change", (e) => {
  var blueInputValue = e.target.value;
  console.log(blueInputValue);
});

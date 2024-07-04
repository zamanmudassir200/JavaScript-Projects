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

const rgbBtn = document.querySelector(".rgb-btn");
const redInput = document.querySelector(".red-input");
const greenInput = document.querySelector(".green-input");
const blueInput = document.querySelector(".blue-input");

rgbBtn.addEventListener("click", () => {
  const extractedRedValue = redInput.value;
  const extractedGreenValue = greenInput.value;
  const extractedBlueValue = blueInput.value;
  console.log(extractedRedValue, extractedGreenValue, extractedBlueValue);

  const rgbContainer = document.querySelector(".rgb-container");
  const rgbColor = document.querySelector(".rgbColor");

  rgbColor.textContent = `rgb(${extractedRedValue},${extractedGreenValue},${extractedBlueValue})`;

  rgbContainer.style.background = `rgb(${extractedRedValue},${extractedGreenValue},${extractedBlueValue})`;
});

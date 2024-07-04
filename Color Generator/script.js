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
const copyHexBtn = document.querySelector(".copy-hex-btn");

copyHexBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(printhexColor.textContent);
  alert(`Hex color is copied to clipboard --- ${printhexColor.textContent}`);
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

  rgbColor.innerHTML = `rgb(${extractedRedValue},${extractedGreenValue},${extractedBlueValue})`;

  rgbContainer.style.background = `rgb(${extractedRedValue},${extractedGreenValue},${extractedBlueValue})`;
});
const copyRgbBtn = document.querySelector(".copy-rgb-btn");
const rgbColor = document.querySelector(".rgbColor");

copyRgbBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(rgbColor.textContent);
  alert(`Rgb color is copied to clipboard ---${rgbColor.textContent}`);
});

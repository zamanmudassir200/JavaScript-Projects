let btnContainer = document.querySelector(".btns");
const inputField = document.querySelector("#inputField");
const calculate = document.querySelector("#calculate");
const AC = document.querySelector("#AC");
const del = document.querySelector("#del");
let btnTextArr = [
  "%",
  "*",
  "/",
  "-",
  "0",
  ".",
  "+",
  "1",
  "2",
  "3",
  "6",
  "5",
  "4",
  "9",
  "8",
  "7",
];

btnTextArr.forEach((text) => {
  let button = document.createElement("button");
  button.classList.add("btn");
  button.innerText = text;
  btnContainer.prepend(button);
  button.addEventListener("click", (e) => {
    let btnText = e.target.innerText;
    inputField.value += btnText;
    console.log(btnText);

    console.log(inputField.value);
  });
});
calculate.addEventListener("click", () => {
  if (inputField.value.trim() === "") {
    alert("please enter some value");
  } else {
    try {
      inputField.value = eval(inputField.value);
    } catch (e) {
      alert("Invalid expression");
    }
  }
});
AC.addEventListener("click", () => {
  inputField.value = "";
});

del.addEventListener("click", () => {
  inputField.value = inputField.value.slice(0, -1);
});

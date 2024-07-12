let inputField = document.getElementById("input-field");
let generatePassword = document.getElementById("generate-password");

let copyIcon = document.getElementById("copy-icon");

generatePassword.addEventListener("click", () => {
  let length = 12;
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = '~!@#$%^&*()_+=-}{[]""``/><:;|';
  let password = "";
  const allChars = lowercase + uppercase + numbers + symbols;
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  inputField.value = password;
});

copyIcon.addEventListener("click", () => {
  //   inputField.select();
  navigator.clipboard.writeText(inputField.value);
  alert("Copied to clipboard");
  //   document.execCommand("copy");
});

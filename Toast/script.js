const toastBox = document.querySelector(".toastBox");
let successMsg = `<i class="fa-solid fa-circle-check"></i> Successfully submitted`;
let errorMsg = `<i class="fa-solid fa-triangle-exclamation"></i> Error Occured! Please fix this`;
let invalidMsg = `<i class="fa-solid fa-circle-exclamation"></i> Invalid info.`;

const showToast = (msg) => {
  const toast = document.createElement("div");
  if (msg.includes("Error")) {
    toast.classList.add("error");
  }
  if (msg.includes("Invalid")) {
    toast.classList.add("invalid");
  }
  toast.innerHTML = msg;

  toast.classList.add("toast");
  toastBox.append(toast);

  setTimeout(() => {
    toast.remove();
  }, 5000);
};

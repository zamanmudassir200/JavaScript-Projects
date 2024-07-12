const notesContainer = document.querySelector(".notes-container");
const notesBtn = document.getElementById("notes-btn");
const notes = document.querySelectorAll("note");
notesBtn.addEventListener("click", () => {
  let noteDiv = document.createElement("div");
  noteDiv.classList.add("note");
  let crossIcon = document.createElement("i");
  crossIcon.classList.add("fa-solid");
  crossIcon.classList.add("fa-circle-xmark");
  let textArea = document.createElement("textarea");
  textArea.placeholder = "Write notes...";
  noteDiv.append(crossIcon, textArea);
  notesContainer.appendChild(noteDiv);

  crossIcon.addEventListener("click", (e) => {
    notesContainer.removeChild(noteDiv);
  });
});

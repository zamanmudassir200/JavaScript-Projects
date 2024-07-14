const notesContainer = document.querySelector(".notes-container");
const notesBtn = document.getElementById("notes-btn");

const saveNotes = () => {
  const notes = [];
  const noteElements = notesContainer.querySelectorAll(".note");
  noteElements.forEach((noteElement) => {
    const textArea = noteElement.querySelector("textarea");
    notes.unshift(textArea.value);
  });
  window.localStorage.setItem("notes", JSON.stringify(notes));
};

const createNoteElement = (content = "") => {
  let noteDiv = document.createElement("div");
  noteDiv.classList.add("note");

  let crossIcon = document.createElement("i");
  crossIcon.classList.add("fa-solid", "fa-circle-xmark");

  let textArea = document.createElement("textarea");
  textArea.placeholder = "Write notes...";
  textArea.value = content;

  noteDiv.append(crossIcon, textArea);
  notesContainer.prepend(noteDiv);

  // Add event listeners
  crossIcon.addEventListener("click", () => {
    notesContainer.removeChild(noteDiv);
    saveNotes();
  });

  textArea.addEventListener("input", saveNotes);
};

notesBtn.addEventListener("click", () => {
  createNoteElement();
  saveNotes();
});

const loadNotes = () => {
  const storedNotes = window.localStorage.getItem("notes");
  if (storedNotes) {
    const notes = JSON.parse(storedNotes);
    notes.forEach((noteContent) => {
      createNoteElement(noteContent);
    });
  }
};

loadNotes();

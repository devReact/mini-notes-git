alert("JavaScript chargé !");

const noteInput = document.getElementById("noteInput");
const addNoteBtn = document.getElementById("addNoteBtn");
const notesList = document.getElementById("notesList");

let notes = [];

addNoteBtn.addEventListener("click", addNote);

function addNote() {
  const text = noteInput.value.trim();

  if (text === "") {
    alert("Veuillez écrire une note.");
    return;
  }

  const note = {
    id: Date.now(),
    text: text,
    important: false,
  };

  notes.push(note);
  noteInput.value = "";

  displayNotes(notes);
}

function displayNotes(notesToDisplay) {
  notesList.innerHTML = "";

  notesToDisplay.forEach(function (note) {
    const li = document.createElement("li");
    li.className = "note-item";

    const p = document.createElement("p");
    p.className = "note-text";
    p.textContent = note.text;

    li.appendChild(p);
    notesList.appendChild(li);
  });
}

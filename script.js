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
    li.className = note.important ? "note-item important" : "note-item";

    const p = document.createElement("p");
    p.className = "note-text";
    p.textContent = note.text;

    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "note-buttons";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Supprimer";

    deleteBtn.addEventListener("click", function () {
      deleteNote(note.id);
    });

    const importantBtn = document.createElement("button");
    importantBtn.className = "important-btn";
    importantBtn.textContent = note.important
      ? "Retirer important"
      : "Important";

    importantBtn.addEventListener("click", function () {
      toggleImportant(note.id);
    });

    buttonsDiv.appendChild(importantBtn);

    buttonsDiv.appendChild(deleteBtn);

    li.appendChild(p);
    li.appendChild(buttonsDiv);
    notesList.appendChild(li);
  });
}

function deleteNote(id) {
  notes = notes.filter(function (note) {
    return note.id !== id;
  });

  displayNotes(notes);
}

function toggleImportant(id) {
  notes = notes.map(function (note) {
    if (note.id === id) {
      return {
        id: note.id,
        text: note.text,
        important: !note.important,
      };
    }

    return note;
  });

  displayNotes(notes);
}

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

    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "note-buttons";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Supprimer";

    deleteBtn.addEventListener("click", function () {
      deleteNote(note.id);
    });

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

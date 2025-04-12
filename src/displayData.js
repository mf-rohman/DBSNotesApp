// import { deleteButton } from "./deleteNote.js";
import { addNoteAnimation } from "./animationAddNote.js";
import { handleDeleteNote } from "./deleteNote.js";
import { editNote } from "./editNote.js";
import { deleteNoteById, fetchData } from "./fetchData.js";

function displayData(notes) {
  const noteList = document.getElementById("note-list");
  noteList.innerHTML = "";

  if (!Array.isArray(notes)) {
    console.info("not array");
    return;
  }
  console.log(typeof notes);
  console.log(notes);
  notes.forEach((note, index) => {
    if (!note || typeof note !== "object") {
      console.warn(`Notes at Index ${index} not valid:`, note);
      return;
    }

    const noteItem = document.createElement("div");
    noteItem.classList.add("note-item-list");
    noteItem.setAttribute("data-noteId", note.id);

    const noteTitle = document.createElement("h3");
    noteTitle.textContent = ` ${note.title}`;
    noteTitle.id = `note-item-title[${note.id}]`;
    noteTitle.classList.add("text-format-title");
    noteTitle.onclick = () => editNote(index);
    noteTitle.setAttribute("data-tooltip", "Double Click to Edit");
    console.log("Indexxxx: ", index);

    const noteBody = document.createElement("p");
    noteBody.textContent = ` ${note.body} `;
    noteBody.classList.add("text-format-body");
    noteBody.id = `note-item-body[${note.id}]`;
    noteBody.setAttribute("data-tooltip", "Double Click to Edit");

    const noteDate = document.createElement("p");
    noteDate.textContent = ` ${note.createdAt}`;
    noteDate.classList.add("text-format-date");

    noteBody.onclick = () => editNote(index);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.onclick = () => handleDeleteNote(note.id);
    deleteButton.innerHTML = `<span class="material-icons">delete_forever</span>`;

    noteItem.append(noteTitle, noteBody, noteDate, deleteButton);

    noteList.insertBefore(noteItem, noteList.firstChild);
    addNoteAnimation();
  });
}

export default displayData;

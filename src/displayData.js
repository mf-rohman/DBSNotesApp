import { notesData } from "./fetchData.js";
import { deleteNote } from "./deleteNote.js";
import { editNote } from "./editNote.js";

function displayData(notesData) {
  const noteList = document.getElementById("note-list");
  noteList.innerHTML = "";

  if (!Array.isArray(notesData)) {
    console.log("not array");
  }

  notesData.forEach((note, index) => {
    const noteItem = document.createElement("div");
    noteItem.classList.add("note-item-list");
    noteItem.setAttribute("data-noteId", note.id);

    const noteTitle = document.createElement("h3");
    noteTitle.textContent = ` ${note.title}`;
    noteTitle.id = `note-item-title[${note.id}]`;
    noteTitle.classList.add("text-format-title");
    noteTitle.onclick = () => editNote(index);
    noteTitle.setAttribute("data-tooltip", "Double Click to Edit");

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
    deleteButton.onclick = () => deleteNote(index);
    deleteButton.innerHTML = `<span class="material-icons">delete_forever</span>`;

    const editButton = document.createElement("button");
    editButton.onclick = () => editNote(index);

    noteItem.append(noteTitle, noteBody, noteDate, deleteButton, editButton);

    noteList.append(noteItem);
  });
}

export default displayData;

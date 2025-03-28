import { notesData } from "./fetchData.js";
import { deleteNote } from "./deleteNote.js";
import { editNote } from "./editNote.js";

function displayData(notesData) {
  const noteList = document.getElementById("note-list");
  noteList.innerHTML = "";
  //   console.log(noteList);
  if (!Array.isArray(notesData)) {
    console.log("not array");
  }
//   console.log(notesData);
  notesData.forEach((note, index) => {
    const noteItem = document.createElement("div");
    noteItem.classList.add("note-item-list");
    noteItem.setAttribute("data-noteId", note.id);
    // console.log(note);

    const noteTitle = document.createElement("h3");
    noteTitle.textContent = ` ${note.title}`;
    noteTitle.id = 'note-item-title';

    const noteBody = document.createElement("p");
    noteBody.textContent = `: ${note.body} `;
    noteBody.classList.add("text-format-body");
    noteBody.id = 'note-item-body';

    const noteDate = document.createElement("p");
    noteDate.textContent = `: ${note.createdAt}`;
    noteDate.classList.add("text-format-date");

    const deleteButton = document.createElement("button");
    deleteButton.onclick = () => deleteNote(index);
    deleteButton.innerHTML = `<span class="material-icons">delete_forever</span>`;

    const editButton = document.createElement("button");
    editButton.onclick = () => editNote(index);
    editButton.innerHTML = `<span class="material-icons">edit</span>`;

    noteItem.append(noteTitle, noteBody, noteDate, deleteButton, editButton);

    noteList.append (noteItem);
    // console.log(noteItem);
  });
}

export default displayData;

import {
  stopAnimationDragable,
  animationDragable,
} from "./animationAddNote.js";
import { hnadleArchiveNote } from "./archiveNote.js";
import { handleDeleteNote } from "./deleteNote.js";
import { editNote } from "./editNote.js";
import { deleteNoteById, fetchData } from "./fetchData.js";
import { handleUnArchivedNotes } from "./unArchivedNotes.js";

function displayData(notes) {
  const noteList = document.getElementById("note-list");
  noteList.innerHTML = "";

  const noteArchivedList = document.getElementById("note-archive");
  noteArchivedList.innerHTML = "";

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
    noteTitle.onclick = () => {
      stopAnimationDragable();
      editNote(index);
    };

    noteTitle.setAttribute("data-tooltip", "Double Click to Edit");

    const noteBody = document.createElement("p");
    noteBody.textContent = ` ${note.body} `;
    noteBody.classList.add("text-format-body");
    noteBody.id = `note-item-body[${note.id}]`;
    noteBody.setAttribute("data-tooltip", "Double Click to Edit");
    noteBody.onclick = () => {
      stopAnimationDragable();
      editNote(index);
    };

    const noteDate = document.createElement("p");
    noteDate.textContent = ` ${note.createdAt}`;
    noteDate.classList.add("text-format-date");

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.setAttribute("title", "delete");
    deleteButton.onclick = () => handleDeleteNote(note.id);
    deleteButton.innerHTML = `<span class="material-icons">delete_forever</span>`;

    if (!note.archived) {
      const archiveButton = document.createElement("button");
      archiveButton.classList.add("archive-button");
      archiveButton.setAttribute("title", "archive");
      archiveButton.onclick = () => hnadleArchiveNote(note.id);
      archiveButton.innerHTML = `<span class="material-icons">archive</span>`;
      noteItem.append(
        noteTitle,
        noteBody,
        noteDate,
        deleteButton,
        archiveButton
      );
      noteList.insertBefore(noteItem, noteList.firstChild);
      animationDragable();
    } else {
      const unArchiveButton = document.createElement("button");
      unArchiveButton.classList.add("unarchive-button");
      unArchiveButton.setAttribute("title", "unarchive");
      unArchiveButton.onclick = () => handleUnArchivedNotes(note.id);
      unArchiveButton.innerHTML = `<span class="material-icons">unarchive</span>`;
      noteItem.append(
        noteTitle,
        noteBody,
        noteDate,
        deleteButton,
        unArchiveButton
      );
      noteArchivedList.insertBefore(noteItem, noteArchivedList.firstChild);
      animationDragable();
    }
  });
}

export default displayData;

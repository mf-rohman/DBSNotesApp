import { allNotes, renderAllNotesData } from "./renderAllNotes.js";
import { stopAddNoteAnimation } from "./animationAddNote.js";
import {
  createNote,
  deleteNoteById,
  fetchData,
  notesData,
} from "./fetchData.js";

function editNote(index) {
  const note = allNotes[index];
  console.log(" note: ", note);

  if (note) {
    const oldTitle = document.getElementById(`note-item-title[${note.id}]`);
    const oldBody = document.getElementById(`note-item-body[${note.id}]`);

    oldTitle.setAttribute("contenteditable", "true");
    oldTitle.setAttribute("spellcheck", "false");

    oldTitle.onblur = () => {
      note.title = oldTitle.textContent;
      allNotes[index] = note;
      console.log("APaapapap:  ", allNotes);

      const newNotesData = { title: note.title, body: oldBody.textContent };
      createNote(newNotesData);
      deleteNoteById(note.id);
      renderAllNotesData();

      oldTitle.setAttribute("contenteditable", "false");
      document.querySelector(".tooltip-text").style.display = "block";
    };

    oldBody.setAttribute("contenteditable", "true");
    oldBody.setAttribute("spellcheck", "false");

    oldBody.onblur = () => {
      note.body = oldBody.textContent;
      notesData[index] = note;

      const newBody = { body: note.body, title: oldTitle.textContent };
      createNote(newBody);
      deleteNoteById(note.id);
      renderAllNotesData();

      oldBody.setAttribute("contenteditable", "false");
      document.querySelector(".tooltip-text").style.display = "block";
    };

    oldTitle.onfocus = () => {
      document.querySelector(".tooltip-text").style.display = "none";
    };
    oldBody.onfocus = () => {
      document.querySelector(".tooltip-text").style.display = "none";
    };

    console.log("sbdkasbd: ", note.body);
    console.log("Cobaaaa:  ", note.title);

    console.log(index);
  }
}

export { editNote };

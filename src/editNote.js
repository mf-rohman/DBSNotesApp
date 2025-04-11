import {
  createNote,
  deleteNoteById,
  fetchData,
  notesData,
} from "./fetchData.js";

function editNote(index) {
  const note = notesData[index];
  console.log("note: ", note);

  if (note) {
    const oldTitle = document.getElementById(`note-item-title[${note.id}]`);
    const oldBody = document.getElementById(`note-item-body[${note.id}]`);

    oldTitle.setAttribute("contenteditable", "true");
    oldTitle.setAttribute("spellcheck", "false");
    oldTitle.onblur = () => {
      note.title = oldTitle.textContent;
      notesData[index] = note;
      localStorage.setItem("notesData", JSON.stringify(notesData));
      console.log("APaapapap:  ", notesData);

      const newNotesData = { title: note.title, body: oldBody.textContent };
      createNote(newNotesData);
      deleteNoteById(note.id);
      fetchData();

      oldTitle.setAttribute("contenteditable", "false");
      document.querySelector(".tooltip-text").style.display = "block";
    };

    oldBody.setAttribute("contenteditable", "true");
    oldBody.setAttribute("spellcheck", "false");
    oldBody.onblur = () => {
      note.body = oldBody.textContent;
      notesData[index] = note;
      localStorage.setItem("notesData", JSON.stringify(notesData));

      const newBody = { body: note.body, title: oldTitle.textContent };
      createNote(newBody);
      deleteNoteById(note.id);
      fetchData();

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

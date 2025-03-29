import { fetchData, notesData, setNoteData } from "./fetchData.js";
import displayData from "./displayData.js";
import { printNoteData } from "./fetchData.js";

function deleteNote(index) {
  let isConfirmDelete = window.confirm(
    "Are you sure you want to delete this note?"
  );
  console.log(isConfirmDelete);

  if (isConfirmDelete) {
    setNoteData(notesData.filter((note, i) => i !== index));

    localStorage.setItem("notesData", JSON.stringify(notesData));
    displayData(notesData);

    console.log(`idx ${index}`);
  }
}

export { deleteNote };

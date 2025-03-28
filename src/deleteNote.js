import { fetchData, notesData, setNoteData } from "./fetchData.js";
import displayData from "./displayData.js";
import { printNoteData } from "./fetchData.js";

function deleteNote(index) {
  // const url = '/assets/data/notesData.json';
  // try {

  // }
  let isConfirmDelete = window.confirm(
    "Are you sure you want to delete this note?"
  );
  console.log(isConfirmDelete);

  if (isConfirmDelete) {
    setNoteData(notesData.filter((note, i) => i !== index));
    // printNoteData();
    localStorage.setItem("notesData", JSON.stringify(notesData));
    displayData(notesData);

    console.log(`idx ${index}`);
  }
}

// function

export { deleteNote };

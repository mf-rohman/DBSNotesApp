import "/src/component/searchBar.js";
import "/src/component/dropDownMenu.js";
import "/src/component/formAddNote.js";
import displayData from "./src/displayData.js";
import { fetchData } from "/src/fetchData.js";
import { deleteNote } from "/src/deleteNote.js";
import { editNote } from "./src/editNote.js";
// import addNote from "./src/addNote.js";

document.addEventListener("DOMContentLoaded", function () {
    fetchData();
});

window.deleteNote = deleteNote;
window.editNote = editNote;
    // window.addNote = addNote;

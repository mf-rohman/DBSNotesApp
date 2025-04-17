import "./src/component/searchBar.js";
import "./src/component/dropDownMenu.js";
import "./src/component/formAddNote.js";
import "./src/component/tooltipText.js";
import * as css from "./src/css/styles.css";
import displayData from "./src/displayData.js";
import {
  fetchData,
  createNote,
  deleteNoteById,
  getArchivedNote,
} from "./src/fetchData.js";
import { editNote } from "./src/editNote.js";
import { animate } from "animejs";
import { fetchLoading, textLoaderSpan } from "./src/fetchLoading.js";
import { renderAllNotesData } from "./src/renderAllNotes.js";

document.addEventListener("DOMContentLoaded", function () {
  renderAllNotesData();
});

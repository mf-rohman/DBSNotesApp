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
import { fetchLoading } from "./src/fetchLoading.js";
import { renderAllNotesData } from "./src/renderAllNotes.js";

// import { addNoteAnimation } from "./src/animationAddNote.js";

document.addEventListener("DOMContentLoaded", async function () {
  animate(".loader-span", {
    x: [
      { to: "-2.75rem", ease: "outExpo", duration: 600 },
      { to: 0, ease: "outBounce", duration: 800, delay: 100 },
    ],
    rotate: {
      from: "-1turn",
      delay: 0,
    },
    delay: (_, i) => i * 50,
    ease: "inOutCirc",
    loopDelay: 500,
    loop: true,
  });
  await fetchLoading();
  renderAllNotesData();
});



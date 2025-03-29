import displayData from "./displayData.js";

let notesData = [];
async function fetchData() {
  const item = localStorage.getItem("notesData");

  try {
    if (item && item != "[]") {
      notesData = JSON.parse(localStorage.getItem("notesData"));
    } else if (
      localStorage.getItem("notesData") === "" ||
      localStorage.getItem("notesData") === null ||
      localStorage.getItem("notesData") === [] ||
      localStorage.getItem("notesData") === "[]" ||
      true
    ) {
      const response = await fetch("assets/data/notesData.json");
      notesData = await response.json();
      localStorage.setItem("notesData", JSON.stringify(notesData));
    }

    displayData(notesData);
  } catch (error) {
    console.log(error);
  }
}

console.log(typeof localStorage.getItem("notesData"));
console.log(localStorage.getItem("notesData") == "[]");
function printNoteData() {
  console.log(notesData);
}

function setNoteData(data) {
  notesData = data;
}
export { notesData, fetchData, printNoteData, setNoteData };

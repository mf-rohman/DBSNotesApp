import displayData from "./displayData.js";
import { fetchData, getArchivedNote } from "./fetchData.js";

let allNotes;
export async function renderAllNotesData(enable = false) {
  let getNote = await fetchData(enable);
  const getListArchivedNotes = await getArchivedNote(enable);
  allNotes = [...getNote, ...getListArchivedNotes];

  displayData(allNotes);
  console.log(allNotes);
}

export { allNotes };

import displayData from "./displayData.js";
import { fetchData, getArchivedNote } from "./fetchData.js";

let allNotes;
export async function renderAllNotesData() {
  const getNote = await fetchData();
  const getListArchivedNotes = await getArchivedNote();

  allNotes = [...getNote, ...getListArchivedNotes];

  displayData(allNotes);
  console.log(allNotes);
}

export { allNotes };

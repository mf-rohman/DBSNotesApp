import { renderAllNotesData } from "./renderAllNotes.js";
import { unArchivedNotes } from "./fetchData";

export async function handleUnArchivedNotes(note_id) {
  const confirmUnArchive = confirm("Are you sure want to unarchive this note?");
  if (!confirmUnArchive) {
    return;
  }

  const result = await unArchivedNotes(note_id);
  console.log("ininifiwifw:", result);

  if (result.status === "success") {
    renderAllNotesData();
  } else {
    alert("Failed " + result.message);
  }
}

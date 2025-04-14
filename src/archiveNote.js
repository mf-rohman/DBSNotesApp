import { renderAllNotesData } from "./renderAllNotes.js";
import { archiveNote, fetchData, getArchivedNote } from "./fetchData";

export async function hnadleArchiveNote(note_id) {
  const confirmArchive = confirm("Are you sure want to archive this note?");
  if (!confirmArchive) {
    return;
  }

  const result = await archiveNote(note_id);

  if (result.status === "success") {
    renderAllNotesData();
  } else {
    alert("Failed " + result.message);
  }
}

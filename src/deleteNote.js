import { renderAllNotesData } from "./renderAllNotes.js";
import { deleteNoteById, fetchData } from "./fetchData.js";

export async function handleDeleteNote(noteId) {
  const confirmDelete = confirm("Are you sure want to delete this note?");
  if (!confirmDelete) {
    return;
  }

  const result = await deleteNoteById(noteId);

  if (result.status === "success") {
    renderAllNotesData(true);
  } else {
    alert("Failed" + result.message);
  }
}

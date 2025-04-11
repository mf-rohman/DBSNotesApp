import { deleteNoteById, fetchData } from "./fetchData.js";
import displayData from "./displayData.js";

export async function handleDeleteNote(noteId) {
  const confirmDelete = confirm("Are you sure want to delete this note?");
  if (!confirmDelete) {
    return;
  }
  const result = await deleteNoteById(noteId);

  if (result.status === "success") {
    await fetchData();
  } else {
    alert("Failed" + result.message);
  }
}

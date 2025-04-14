import displayData from "./displayData.js";
import { CONFIG } from "./config.js";
import { fetchLoading, stopLoading } from "./fetchLoading.js";
import { addNoteAnimation } from "./animationAddNote.js";

let notesData;
export async function fetchData() {
  try {
    const response = await fetch(CONFIG.API_BASE_URL + "/notes", {
      method: "GET",
    });

    if (!response.ok) {
      alert(`Error Get All Note : ${response.statusText}`);
      return null;
    }

    const result = await response.json();
    notesData = result.data;

    // console.log({ notesData });

    return notesData;
  } catch (error) {
    alert("Error Get All Notes : " + error.message);
    console.error(error);
  } finally {
    stopLoading();
    console.info(stopLoading());
  }
}

export async function createNote({ title, body }) {
  try {
    const response = await fetch(CONFIG.API_BASE_URL + "/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    });

    if (!response.ok) {
      alert(`Error ${response.status}: ${response.statusText}`);
      return null;
    }
    const result = await response.json();
    // addNoteAnimation();
    console.log("Result: ", result);

    return result;
  } catch (error) {
    alert("Error Create Note : " + error.message);
    console.error(error);
  }
}

export async function deleteNoteById(note_id) {
  try {
    const response = await fetch(CONFIG.API_BASE_URL + `/notes/${note_id}`, {
      method: "DELETE",
    });

    const result = await response.json();
    console.log(result);

    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function archiveNote(note_id) {
  try {
    const response = await fetch(
      CONFIG.API_BASE_URL + `/notes/${note_id}/archive`,
      {
        method: "POST",
      }
    );

    if (!response.ok) {
      alert(`Error While Archive Note: ${response.statusText}`);
      return null;
    }

    const result = await response.json();
    console.log("fhwuiofhweioufhbweoi:", result);

    return result;
  } catch {}
}

export async function getArchivedNote() {
  try {
    const response = await fetch(CONFIG.API_BASE_URL + `/notes/archived`, {
      method: "GET",
    });

    if (!response.ok) {
      alert(`Error Get Archived Note: ${response.statusText}`);
      return null;
    }

    const result = await response.json();
    notesData = result.data;
    console.log("archived NOte: ", { notesData });
    // displayData(notesData);

    return notesData;
  } catch (error) {
    alert("Error Get Archived Notes : " + error.message);
    console.error(error);
  }
}

export async function unArchivedNotes(note_id) {
  try {
    const response = await fetch(
      CONFIG.API_BASE_URL + `/notes/${note_id}/unarchive`,
      {
        method: "POST",
      }
    );

    if (!response.ok) {
      alert(`Error While unArchive Note: ${response.statusText}`);
      return null;
    }

    const result = await response.json();
    console.log("fhwuiofhweioufhbweoi:", result);

    return result;
  } catch (error) {
    console.error(error);
    alert("Error While unArchive Note:", error);
  }
}

export { notesData };

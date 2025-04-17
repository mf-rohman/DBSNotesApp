import displayData from "./displayData.js";
import { CONFIG } from "./config.js";
import { fetchLoading, stopLoading } from "./fetchLoading.js";

let notesData;
export async function fetchData(enable = false) {
  try {
    if (!enable) {
      await fetchLoading();
    }
    const response = await fetch(CONFIG.API_BASE_URL + "/notes", {
      method: "GET",
    });
    if (!response.ok) {
      alert(`Error Get All Note : ${response.statusText}`);
      return null;
    }

    const result = await response.json();
    notesData = result.data;

    return notesData;
  } catch (error) {
    alert("Error Get All Notes : " + error.message);
    console.error(error);
  } finally {
    if (!enable) {
      stopLoading();
    }
  }
}

export async function createNote({ title, body }) {
  try {
    await fetchLoading();
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
    console.log("Result: ", result);

    return result;
  } catch (error) {
    alert("Error Create Note : " + error.message);
    console.error(error);
  } finally {
    stopLoading();
  }
}

export async function deleteNoteById(note_id) {
  try {
    await fetchLoading();
    const response = await fetch(CONFIG.API_BASE_URL + `/notes/${note_id}`, {
      method: "DELETE",
    });

    const result = await response.json();
    console.log(result);

    return result;
  } catch (error) {
    alert("Error When Delete Notes : " + error.message);
    console.error(error);
  } finally {
    stopLoading();
  }
}

export async function archiveNote(note_id) {
  try {
    await fetchLoading();
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
  } catch (error) {
    alert("Error Archived Notes : " + error.message);
    console.error(error);
  } finally {
    stopLoading();
  }
}

export async function getArchivedNote(enable = false) {
  try {
    if (!enable) {
      await fetchLoading();
    }
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

    return notesData;
  } catch (error) {
    alert("Error Get Archived Notes : " + error.message);
    console.error(error);
  } finally {
    stopLoading();
  }
}

export async function unArchivedNotes(note_id) {
  try {
    await fetchLoading();
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
  } finally {
    stopLoading();
  }
}

export { notesData };

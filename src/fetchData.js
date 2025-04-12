import displayData from "./displayData.js";
import { CONFIG } from "./config.js";
import { fetchLoading, stopLoading } from "./fetchLoading.js";
import { addNoteAnimation } from "./animationAddNote.js";

let notesData;
export async function fetchData() {
  try {
    await fetchLoading();
    const response = await fetch(CONFIG.API_BASE_URL + "/notes", {
      method: "GET",
    });

    if (!response.ok) {
      alert(`Error ${response.status}: ${response.statusText}`);
      return null;
    }

    const result = await response.json();
    notesData = result.data;

    console.log({ notesData });
    displayData(notesData);
    console.info("info : ", fetchLoading());
    return notesData;
  } catch (error) {
    alert("Error Get Notes : " + error.message);
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

    addNoteAnimation();
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

export { notesData };

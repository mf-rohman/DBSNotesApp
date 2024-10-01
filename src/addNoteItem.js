export async function addNoteItem() {
  try {
    const response = await fetch("assets/data/notesData.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

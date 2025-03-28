import { notesData } from "./fetchData.js";


function editNote (index) {
    const indexNoteList = notesData.findIndex((note, i) =>i ===index);
    
    if (indexNoteList !== -1) {
        const note = notesData[indexNoteList];

        console.log(index);
        document.getElementById("note-item-title").value = note.title;
        document.getElementById("note-item-body").value = note.body;

    }
    document.addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById("note-item-title").innerHTML = `<input type="text"></input>`
    })
    console.log(indexNoteList)
}
export {editNote};
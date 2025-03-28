import { notesData } from "./fetchData";

function searchNote () {
    const searchQuery = document.getElementById('search').value.toLocaleLowerCase();

    const filteredBooks = notesData.filter((note) => 
        note.title.toLocaleLowerCase().includes(searchQuery)
    );


}
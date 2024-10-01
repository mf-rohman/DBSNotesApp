import "/src/component/searchBar.js";
import "/src/component/dropDownMenu.js";
import { addNoteItem } from "/src/addNoteItem.js";

async function displayNoteData() {
  const notesData = await addNoteItem();
//   console.log(notesData);

  const noteList = document.getElementById("note-list");
//   console.log(noteList);

    notesData.forEach((note) => {
    const noteItem = document.createElement("div");
    noteItem.classList.add("note-item-list"); 
    noteItem.setAttribute("data-noteId", note.id);
    // console.log(note);
    
    const noteTitle = document.createElement("h3");
    noteTitle.textContent = ` ${note.title}`;

    const noteBody = document.createElement("p");
    noteBody.textContent = `: ${note.body} `
    noteBody.classList.add("text-format-body");

    const noteDate = document.createElement("p");
    noteDate.textContent = `: ${note.createdAt}`;
    noteDate.classList.add("text-format-date"); 

    noteItem.append(noteTitle, noteBody, noteDate);

    noteList.append(noteItem);    
  });
}

displayNoteData();

import displayData from "../displayData.js";
import { notesData } from "../fetchData.js";

class FormAddNote extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
            <style>
                @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
                .note-form {
                    display: grid;
                    justify-content: left;
                    margin: 20px;
                    grid-template-columns: 1fr 1fr;
                    gap: 1rem;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    padding: 10px;
                    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
                }
            </style>
            <div class="note-form">
                <form>
                    <label for="title">Title</label>
                    <input type="text" id="title" name="title" placeholder="Title" required>
                    <label for="description">Description</label>
                    <input type="text-area" id="description" name="description" placeholder="Description" required>
                    <button type="submit" id="btn-add-note"><i class="bi bi-plus-circle"></i></button>
                </form>
            </div>
            
        `;
        const btnAddNote = this.shadowRoot.getElementById("btn-add-note");
        btnAddNote.addEventListener("click", (event) => {
          event.preventDefault();
          const title = this.shadowRoot.getElementById("title").value;
          const body = this.shadowRoot.getElementById("description").value;
          const timeStamp = new Date().toISOString();
      
          const newNote = { id: `notes-${Date.now()}`, title: title, body: body, createdAt: timeStamp, archived: false };
          console.log(notesData)
          notesData.push(newNote);
          localStorage.setItem("notesData", JSON.stringify(notesData));
          console.log(notesData);
          displayData(notesData);

        } )
  }
  //   addSubmitForm() {
  //     const titleNote = document.getElementById("title").value;
  //     const descriptionNote = document.getElementById("description").value;
  //     const timeStamp = new Date().toISOString();
  //     const newNote = { title: titleNote, body: descriptionNote, createdAt: timeStamp };
  //     notesData.push(newNote);
  //     console.log(newNote);
  //     localStorage.setItem("notesData", JSON.stringify(notesData));
  //     displayData(notesData);

  //   }
}
customElements.define("form-add-note", FormAddNote);

import { renderAllNotesData } from "../renderAllNotes.js";
import displayData from "../displayData.js";
import { createNote, fetchData } from "../fetchData.js";

class FormAddNote extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
            <style>
                @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
                .note-form {
                    display: grid;
                    justify-content: left;
                    margin: 20px;
                    grid-template-columns: 1fr 1fr auto;
                    gap: 1rem;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    padding: 20px;
                    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
                }
                input[type="text"] {
                  padding: 10px;
                  gap: 2rem;
                  border: 1px solid #ccc;
                  border-radius: 5px;
                }
                input:focus {
                  border-color:rgb(240, 182, 143);
                  outline: none;
                  box-shadow: 0 0 10px rgb(243, 156, 57);
                }
                button {
                  padding-top: 5px;
                  position: absolute;
                  background : unset;
                  border: none;
                  cursor: pointer;
                }
                .material-icons {
                  font-size: 30px;
                  border: none;
                }
                button .material-icons:hover {
                  color: rgb(218, 108, 34);
                  transform: scale(1.2);
                }
            </style>
            <div class="note-form">
                <form id="form-add-note">
                    <label for="title">Title</label>
                    <input type="text" id="title" name="title" placeholder="Title" required>
                    <label for="description">Description</label>
                    <input type="text" id="description" name="description" placeholder="Description" required>
                    <button type="submit" id="btn-add-note">
                      <span class="material-icons">add_box</span>
                    </button>
                </form>
            </div>
            
        `;
    const formAddNote = this.shadowRoot.getElementById("form-add-note");
    formAddNote.addEventListener("submit", async (event) => {
      event.preventDefault();
      const title = this.shadowRoot.getElementById("title").value;
      const body = this.shadowRoot.getElementById("description").value;

      const newNoteData = { title, body };
      console.log("Data User:", newNoteData);

      await createNote(newNoteData);
      renderAllNotesData(true);
    });
  }
}

if (!customElements.get("form-add-note")) {
  customElements.define("form-add-note", FormAddNote);
}

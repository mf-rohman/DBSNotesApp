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
    const btnAddNote = this.shadowRoot.getElementById("form-add-note");
    btnAddNote.addEventListener("click", (event) => {
      event.preventDefault();
      if (!btnAddNote.checkValidity()) {
        btnAddNote.reportValidity();
        return;
      }

      const title = this.shadowRoot.getElementById("title").value;
      const body = this.shadowRoot.getElementById("description").value;
      const timeStamp = new Date().toISOString();

      const newNote = {
        id: `notes-${Date.now()}`,
        title: title,
        body: body,
        createdAt: timeStamp,
        archived: false,
      };

      notesData.push(newNote);
      localStorage.setItem("notesData", JSON.stringify(notesData));

      displayData(notesData);
    });
  }
}
customElements.define("form-add-note", FormAddNote);

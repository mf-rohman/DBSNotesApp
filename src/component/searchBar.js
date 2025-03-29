import { notesData } from "../fetchData.js";
import displayData from "../displayData.js";

class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
            <style> 
             @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
                .search-bar-container {
                    position: relative;
                    display: flex;
                    align-items: center;
                    width: 100%;
                    margin-left: 80px;
                    opacity: 0; 
                    transform: scale(0.8);
                    animation: zoomIn 0.8s ease-out forwards;
                }
                input[type="search"] {
                    width: 100%;
                    height: 50px;
                    padding: 12px 40px 12px 15px;
                    border: 1px solid #ccc;
                    border-radius: 23px;
                    font-size: 16px;
                    font-family: 'Roboto', sans-serif;
                }
                input:focus {
                    outline: none;
                    border-color:rgb(240, 182, 143);
                    box-shadow: 0 0 10px rgb(243, 156, 57);
                }
                .material-icons {
                    position: absolute;
                    right: 10px;
                    font-size: 25px;
                    color:rgb(195, 199, 202);
                }
                @keyframes zoomIn {
                    from {
                        transform: scale(0.8);
                        opacity: 0;
                    }
                    to {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
            </style>
            <div class="search-bar-container">
                <input type="search" id="search" placeholder="Search note . . .">
                <span class="material-icons">search</span>
            </div>
        `;
    const searchNotesInput = this.shadowRoot.getElementById("search");
    searchNotesInput.oninput = () => this.searchNote();
  }
  searchNote() {
    const searchQuery = this.shadowRoot
      .getElementById("search")
      .value.toLowerCase();

    const filteredNotes = notesData.filter((note) =>
      note.title.toLowerCase().includes(searchQuery)
    );

    if (searchQuery === "") {
      displayData(notesData);
      return;
    }

    if (filteredNotes.length === 0) {
      document.getElementById("note-list").innerHTML = `
        <p>No one note can't found</p>
        `;
      return;
    }
    displayData(filteredNotes);
  }
}

customElements.define("search-bar", SearchBar);

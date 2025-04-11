class dropDownMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
            <style>
                .dropdown {
                    display: inline-block;
                    position: relative;
                    
                }

                .dropdown-content {
                    margin-top: 20px;
                    display: none;
                    position: absolute;
                    background-color: #f9f9f9;
                    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                    z-index: 1;
                    border-radius: 5px;
                    padding: 5px;
                    line-height: 2;
                    width: 100px;
                }
                .dropdown-content ul  {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .dropdown-content li {
                    padding: 5px 10px;
                    cursor: pointer;
                }
         
                .show {
                    display: block;
                }
            
            </style>
            <div class="dropdown">
                <div class="dropdown-content">
                    <slot name="content"></slot>
                </div>
            </div>
        `;
    document.addEventListener("click", this.toggleDropdown.bind(this));
  }
  disconnectedCallback() {
    document.removeEventListener("click", this.toggleDropdown.bind(this));
  }
  toggleDropdown(event) {
    const personIconBtn = document.querySelector(".user-profile span");
    const isClicked =
      this.contains(event.target) || personIconBtn.contains(event.target);

    if (isClicked) {
      this.shadowRoot
        .querySelector(".dropdown-content")
        .classList.toggle("show");
    } else {
      this.shadowRoot
        .querySelector(".dropdown-content")
        .classList.remove("show");
    }
  }
}

if (!customElements.get("drop-down-menu")) {
  customElements.define("drop-down-menu", dropDownMenu);
}

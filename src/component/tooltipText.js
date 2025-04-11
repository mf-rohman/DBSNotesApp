class TooltipText extends HTMLElement {
  constructor() {
    super();
    this.tooltip = document.createElement("div");
    this.tooltip.classList.add("tooltip-text");
    document.body.appendChild(this.tooltip);

    console.log("Tooltip element created:", this.tooltip);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }
  connectedCallback() {
    document.addEventListener("mouseover", this.handleMouseOver);
    document.addEventListener("mouseout", this.handleMouseOut);
    document.addEventListener("mousemove", this.handleMouseMove);
  }
  disconnectedCallback() {
    document.removeEventListener("mouseover", this.handleMouseOver);
    document.removeEventListener("mouseout", this.handleMouseOut);
    document.removeEventListener("mousemove", this.handleMouseMove);
  }

  handleMouseOver(event) {
    const target = event.target.closest("[data-tooltip]");
    if (target) {
      const tooltipText = target.getAttribute("data-tooltip");
      this.tooltip.textContent = tooltipText;
      this.tooltip.style.visibility = "visible";
      this.tooltip.style.opacity = "1";
    }
  }
  handleMouseMove(event) {
    this.tooltip.style.left = `${event.clientX + 10}px`;
    this.tooltip.style.top = `${event.clientY - 30}px`;
  }

  handleMouseOut() {
    if (
      !event.relatedTarget ||
      !event.relatedTarget.closest("[data-tooltip]")
    ) {
      this.tooltip.style.opacity = "0";
      this.tooltip.style.visibility = "hidden";
    }
  }
}

if (!customElements.get("tooltip-text")) {
  customElements.define("tooltip-text", TooltipText);
}

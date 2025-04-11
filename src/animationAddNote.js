import { animate } from "animejs";

export function addNoteAnimation() {
  animate(".note-item-list", {
    opacity: [{ from: 0, to: 1 }],
    y: [{ from: 20, to: 0 }],
    duration: 1000,
    ease: "easeOutQuad",
  });
}

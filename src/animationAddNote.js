import { animate, stagger } from "animejs";

export function addNoteAnimation() {
  animate('.note-item-list', {
   x: [
    {from: '-17rem'},
    // {to: '17rem'},
   ],
   delay: stagger(200),
   duration: stagger(300, {start: 500}),
  //  loop: 1,
  //  alternate: true
  });
}

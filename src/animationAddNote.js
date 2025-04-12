import { animate, stagger } from "animejs";

export function addNoteAnimation() {
  animate('.note-item-list', {
   x: [
    {from: '-17rem'},
    {to: '1px'},
   ],
   delay: stagger(100),
   duration: stagger(300, {start: 600}),
  //  loop: 1,
  //  alternate: true
  });
}

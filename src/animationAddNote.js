import { animate, stagger, createDraggable, utils } from "animejs";

const animationDragableMain = () => {
  const animateDragable = createDraggable(".note-item-list", {
    x: { mapTo: "rotateY" },
    y: { mapTo: ["z"] },
    y: { mapTo: "rotateX" },
  });
  const animateTurn = animate(".note-item-list", {
    traslateX: { from: "-17rem" },
    // x: {from: "-17rem"},
    delay: stagger(200),
    duration: stagger(400, { start: 800 }),
    rotate: "1turn",
    //  loop: 1,
    alternate: true,
  });
  return { animateDragable, animateTurn };
};

utils.set(".note-item-list", { z: -999 });

const stopAnimationDragable = () => {
  const { animateDragable, animateTurn } = animationDragableMain();
  animateDragable.stop();
  animateDragable.reset();
  utils.remove(".note-item-list");
};

export {
  stopAnimationDragable,
  animationDragableMain as animationDragable,
  animationDragableMain as animateTurn,
};

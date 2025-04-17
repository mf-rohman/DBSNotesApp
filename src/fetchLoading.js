import { animate, utils } from "animejs";

const elemenLoading = document.getElementById("fetch-page-loading");
const mainContent = document.querySelectorAll("div.grid-container");

let circleLoading;
export function fetchLoading() {
  elemenLoading.style.display = "block";
  mainContent.forEach((gridContainer) => {
    gridContainer.setAttribute("id", "blur");
  });

  circleLoading = animate("#loading-circle", {
    rotate: {
      from: "-1turn",
      delay: 0,
    },
    ease: "linier",
    duration: 2200,
    loop: 1,
  });

  animate(".loader-span", {
    x: [
      { to: "-2.75rem", ease: "outExpo", duration: 600 },
      { to: 0, ease: "outBounce", duration: 800, delay: 100 },
    ],
    rotate: {
      from: "-1turn",
      delay: 0,
    },
    delay: (_, i) => i * 50,
    ease: "inOutCirc",
    loopDelay: 300,
    loop: 1.4,
  });

  console.log(elemenLoading);
  return circleLoading;
}

export function stopLoading() {
  elemenLoading.style.display = "none";
  mainContent.forEach((gridContainer) => {
    gridContainer.removeAttribute("id");
  });
}

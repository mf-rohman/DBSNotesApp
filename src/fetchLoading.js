import { animate, utils } from "animejs";

const elemenLoading = document.getElementById("fetch-page-loading");
const textLoading = document.querySelectorAll("span");

let circleLoading;

export function fetchLoading() {
  console.log("test");
  elemenLoading.style.display = "block";

  circleLoading = animate("#loading-circle", {
    rotate: "1turn",
    ease: "linier",
    duration: 2400,
    loop: 1,
  });
  // textLoadingAnimation();
  console.log(elemenLoading);
  return circleLoading;
}

export function stopLoading() {
  elemenLoading.style.display = "none";
  utils.remove(circleLoading);
  return utils;
}

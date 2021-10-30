const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let initialWindowWidth = window.innerWidth;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  // Check if window actually resized
  // On mobile scrolling can trigger this event

  if (initialWindowWidth !== window.innerWidth) {
    // console.log("resize triggered, resizing canvas");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    initialWindowWidth = window.innerWidth;
  }
});

const slider = document.querySelector(".content");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", (_) => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", (_) => {
  isDown = false;
  slider.classList.remove("active");
  slider.style.userSelect = "initial";
  slider.style.cursor = "initial";
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
  slider.style.userSelect = "none";
  slider.style.cursor = "grabbing";
});

// AOS.init();
document.addEventListener("aos:in", ({ detail }) => {
  // console.log("animated in", detail);
});

document.addEventListener("aos:out", ({ detail }) => {
  // console.log("animated out", detail);
});

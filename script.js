const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let initialWindowWidth = window.innerWidth;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const techArr = [
  "HTML",
  "CSS",
  "JavaScript",
  "Node.JS",
  "Express",
  "Socket.IO",
  "JSON",
  "API's",
  "React",
  "Canvas",
  "VPS",
  "Ubuntu",
  "Git",
  "CLI",
  "SQL",
  "NoSQL",
  "VS Code",
];

const colorArr = [
  "#0048BA",
  "#B0BF1A",
  "#7CB9E8",
  "#C0E8D5",
  "#B284BE",
  "#72A0C1",
  "#EDEAE0",
  "#F0F8FF",
  "#C46210",
  "#EFDECD",
  "#E52B50",
  "#9F2B68",
  "#3B7A57",
  "#9966CC",
];

const fontsArr = [
  "Audiowide",
  "Black Ops One",
  "Bungee",
  "Bungee Shade",
  "Comfortaa",
  "Fira Code",
  "Gravitas One",
  "Monoton",
  "Rye",
  "Special Elite",
];

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

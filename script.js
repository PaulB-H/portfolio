window.onload = (e) => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  let initialWindowWidth = window.innerWidth;

  const mainHeight = document.getElementById("main").offsetHeight;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  if (mainHeight > window.innerHeight) {
    canvas.height = mainHeight;
  }

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

  const fontArr = [
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

  let shadeInterv, stopTimer, drawInterv;

  const drawIntervFunc = () => {
    ctx.textBaseline = "top";
    ctx.textAlign = "left";

    drawInterv = window.setInterval(() => {
      const drawx = Math.ceil(Math.random() * canvas.width);
      const drawy = Math.ceil(Math.random() * canvas.height);

      const randomTech = techArr[Math.floor(Math.random() * techArr.length)];
      const randomFont = fontArr[Math.floor(Math.random() * fontArr.length)];
      const randomColor = colorArr[Math.floor(Math.random() * colorArr.length)];

      ctx.font = `30px ${randomFont}`;
      ctx.fillStyle = randomColor;

      ctx.fillText(randomTech, drawx, drawy);
    }, 50);
  };
  drawIntervFunc();

  const shadeIntervFunc = () => {
    shadeInterv = window.setInterval(() => {
      ctx.fillStyle = "rgba(0,0,0,0.025)";

      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }, 50);
  };
  shadeIntervFunc();

  const stopIntervTimeout = () => {
    stopTimer = window.setTimeout(() => {
      window.clearTimeout(drawInterv);
      window.clearInterval(shadeInterv);
    }, 3000);
  };
  stopIntervTimeout();

  window.addEventListener("resize", () => {
    // Check if window actually resized
    // On mobile scrolling can trigger this event

    if (initialWindowWidth !== window.innerWidth) {
      // console.log("resize triggered, resizing canvas");

      const mainHeight = document.getElementById("main").offsetHeight;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      if (mainHeight > window.innerHeight) {
        canvas.height = mainHeight;
      }

      initialWindowWidth = window.innerWidth;

      window.clearInterval(drawInterv);
      window.clearTimeout(stopTimer);
      window.clearInterval(shadeInterv);

      drawIntervFunc();
      shadeIntervFunc();
      stopIntervTimeout();
    }
  });
};

let closestId = document
  .elementFromPoint($(window).width() / 2, $(window).height() / 2)
  .closest("li").id;

$(".content").scroll(function () {
  let middleElem = document.elementFromPoint(
    $(window).width() / 2,
    $(window).height() / 2
  );
  closestId = middleElem.closest("li").id;
});

// Note: Still possible to log 0 horizontal movement
// when using laptop track pad, triggering action I wanted specifically
// for mousewheel
// Not as much of an issue since 'smooth-scroll polyfill' fixed
// the smooth  part of '.scrollIntoView({ behavior: "smooth" })'
let disableWheel = false;
window.addEventListener("wheel", function (e) {
  if (!disableWheel) {
    if (e.deltaX === 0) {
      // console.log("Y-Axis Only Scroll");
      if (e.deltaY > 0) {
        // slider.scrollLeft += window.innerWidth;
        if (closestId === "home") {
          document
            .getElementById("portfolio")
            .scrollIntoView({ behavior: "smooth" });
        } else if (closestId === "portfolio") {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // slider.scrollLeft -= window.innerWidth;
        if (closestId === "contact") {
          document
            .getElementById("portfolio")
            .scrollIntoView({ behavior: "smooth" });
        } else if (closestId === "portfolio") {
          document
            .getElementById("home")
            .scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }
});

let currentDetails;
$(".portfolioItem").on("click", function () {
  $("#portfolioItems, #tapforinfo, #portfolioHeader").css("display", "none");
  currentDetails = $(`.${this.id}`);
  $(`.${this.id}`).css("display", "flex");
  $(`.${this.id}`).css("z-index", "11");

  $(`.content`).css("overflow-x", "hidden");
  $(".content").css("scroll-snap-type", "none");

  $("#portfolio").css("overflow-y", "auto");
  $(`.${this.id}`).css("overflow-y", "auto");

  $(`#overlay`).css("display", "inline");
  disableWheel = true;
});

function reset() {
  $("#portfolioItems").css("display", "grid");
  $("#tapforinfo, #portfolioHeader").css("display", "initial");
  currentDetails.css("display", "none");
  $(`#overlay`).css("display", "none");

  $(`.content`).css("overflow-x", "scroll");
  $(".content").css("scroll-snap-type", "both mandatory");

  $("#portfolio").css("overflow-y", "hidden");
  $(`.${this.id}`).css("overflow-y", "hidden");

  disableWheel = false;
}
window.addEventListener("resize", reset);

function navScroll(id) {
  document.getElementById(`${id}`).scrollIntoView({ behavior: "smooth" });
}

function copyEmail() {
  let text = "p.bernardhall@gmail.com";
  navigator.clipboard.writeText(text);
  document.getElementById("copy-email").innerHTML = "Copied to clipboard!";
  window.setTimeout(() => {
    document.getElementById("copy-email").innerHTML = "Copy Email";
  }, 5000);
}

document.addEventListener("DOMContentLoaded", () => {
  let portfolioItems = document.querySelectorAll(".portfolioItem");

  let randomUsed = new Set();
  let rand;
  let lastRand;

  setInterval(() => {
    if (randomUsed.size === 9) {
      randomUsed = new Set();
    }

    do {
      rand = Math.floor(Math.random() * 9);
    } while (randomUsed.has(rand) || rand === lastRand);

    lastRand = rand;
    randomUsed.add(rand);
    portfolioItems[rand].classList.add("animate__animated", "animate__wobble");

    setTimeout(() => {
      portfolioItems[rand].classList.remove(
        "animate__animated",
        "animate__wobble"
      );
    }, 850);
  }, 3000);

  const profileImg = document.querySelector(".profile-img");
  let clicks = 0;

  profileImg.addEventListener("click", (e) => {
    clicks++;
    if (clicks === 10)
      document.location.href = "https://www.devbypaul.ca/secret.html";
  });
});

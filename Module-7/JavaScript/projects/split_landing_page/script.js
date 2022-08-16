// Author: Ryan Collins
// Program: Split landing page
// Version: 1.0
// Date: Jul-26-2022
// ----
// This program splits a landing page and adds a cool transition
// on mouse hover
// ----

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

left.addEventListener("mouseenter", () =>
  container.classList.add("hover-left")
);
left.addEventListener("mouseleave", () =>
  container.classList.remove("hover-left")
);

right.addEventListener("mouseenter", () =>
  container.classList.add("hover-right")
);
right.addEventListener("mouseleave", () =>
  container.classList.remove("hover-right")
);

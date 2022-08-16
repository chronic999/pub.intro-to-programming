// Author: Ryan Collins
// Program: Search toggle
// Version: 1.0
// Date: Jul-26-2022
// ----
// This program places classes through an event on click
// We no longer require JQuery to make things like this work
// with transitions etc
// ----

const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  //   console.log("active!");
  input.focus();
});

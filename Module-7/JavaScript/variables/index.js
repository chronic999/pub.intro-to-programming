// The first line pops a box up on the screen that asks the reader to enter their name, and then stores the value in a variable.

// The second line displays a welcome message that includes their name, taken from the variable value and the third line displays that name on the page.

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables#variable_example

const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

buttonA.onclick = () => {
  const name = prompt("What is your name?");
  alert(`Hello ${name}, nice to see you!`);
  headingA.textContent = `Welcome ${name}`;
};

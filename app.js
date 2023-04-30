"use strict";

console.log("JS kører");

window.addEventListener("load", initApp);

let count = 0;

function initApp() {
  addButtonClicked();
  subtractButtonClicked();
}

const number = document.querySelector("#number");

function addButtonClicked() {
  document.querySelector("#add-button").addEventListener("click", addOne);
}

function subtractButtonClicked() {
  document
    .querySelector("#subtract-button")
    .addEventListener("click", subtractOne);
}

function addOne() {
  count += 1;
  number.textContent = count;
  console.log(count);
  if (count >= 20) {
    number.textContent = "prøv igen";
  }
  console.log("add-button clicked");
}

function subtractOne() {
  count-=1;
  number.textContent = count;
  console.log(count);
  console.log("subtract-button clicked");
}

"use strict";

console.log("JS kører");

window.addEventListener("load", initApp);

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
    number.textContent = +number.textContent + 1;
    
console.log("add-button clicked");

}

function subtractOne() {
    number.textContent = +number.textContent - 1;
      console.log("subtract-button clicked");
}


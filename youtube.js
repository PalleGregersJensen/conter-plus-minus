"use strict";

window.addEventListener("load", start);

function start() {
  console.log("JS kører");
  const a = 10;
  const b = 90;
  const c = a + b;

  if (a === 100) {
    console.log(true);
  } else if (b === 100) {
    console.log(true);
  } else if (a + b === 100) {
    console.log(true);
  } else {
    console.log(false);
  }
  findEndNameOfFile();
}

function findEndNameOfFile() {
  let textOne = "Index.js";
  let textTwo = "youtube.html";

  let resultOne = textOne.slice(textOne.lastIndexOf("."));
  console.log(resultOne);
  let resultTwo = textTwo.slice(textTwo.lastIndexOf("."));
  console.log(resultTwo);

  replaceLetterWithTheOneBefore("abc");
}

function replaceLetterWithTheOneBefore() {
  let text = "a b c d e f g h i j k l m n i o q r s t u v w x y z";
  console.log(text);
  let textArray = text.split(" ");
  console.log(textArray);
  textArray.push("abc");
  console.log(textArray.push());
  takeFirstThreeCharactersAndLastThreeCharacters();
}

function takeFirstThreeCharactersAndLastThreeCharacters() {
  let str = "Aston Villa";
  let firstThreeLetters = str.slice(0, 3);
  console.log(firstThreeLetters);
  let lastThreeLetters = str.slice(-3);
  console.log(lastThreeLetters);
  let finalString = `${firstThreeLetters}${lastThreeLetters}`;
  console.log(finalString);

  if (str.length <= 2) {
    console.log(str);
  } else {
    console.log(finalString);
  }

  document.querySelector("#headline").textContent = `${finalString}`;
  extractFirstHalfOfStringOfEvenNumber();
}

function extractFirstHalfOfStringOfEvenNumber() {
  let name = "Herbie";
  let divider = 2;
  let nameLength = name.length;

  if (nameLength % 2 === 0) {
    console.log(name.slice(0, name.length / 2));
  } else {
    console.log("name of uneven length");
  }
  concatenateTwoStringsExceptTheirFirstCharacter();
}

function concatenateTwoStringsExceptTheirFirstCharacter() {
  const firstString = "Alex";
  const secendString = "Thomas";

  const newFirstString = firstString.slice(1);
  console.log(newFirstString);
  const newSeondString = secendString.slice(1);
  console.log(newSeondString);

  const result = `${newFirstString}${newSeondString}`;
    console.log(result);
    
    nearestToOneHundred(100.5, 99);
}

function nearestToOneHundred(a, b) {
//   let a = -98.5;
//   let b = 98.4;

    let distanceToOneHundredForA = 100 - a;
    console.log(distanceToOneHundredForA);
    let distanceToOneHundredForAAbsolute = Math.abs(distanceToOneHundredForA);
    console.log(distanceToOneHundredForAAbsolute);

    let distanceToOneHundredForB = 100 - b;
    console.log(distanceToOneHundredForB);
        let distanceToOneHundredForBAbsolute = Math.abs(
            distanceToOneHundredForB);
    console.log(distanceToOneHundredForBAbsolute)

    if (
        distanceToOneHundredForAAbsolute < distanceToOneHundredForBAbsolute &&
        distanceToOneHundredForAAbsolute >= 0 &&
        distanceToOneHundredForBAbsolute >= 0
    ) {
        console.log(a);
    } else if (
        distanceToOneHundredForAAbsolute > distanceToOneHundredForBAbsolute &&
        distanceToOneHundredForAAbsolute >= 0 &&
        distanceToOneHundredForBAbsolute >= 0)
    {
        console.log(b);
    }

    else {
        console.log(a);
        console.log(b);
    }
    

    }
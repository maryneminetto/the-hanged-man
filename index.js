//! Generate the random word

const words = ["acacia", "bougie", "cancre", "defaut", "tongue"];
let str = words[Math.floor(Math.random() * words.length)];
let word = str.split("");
// if you want to cheat ;) -> console.log(word);

//! Recover input value

const input = document.querySelector("input");
let presentLetter = document.querySelector("#presentLetter");
let suggLetter = document.querySelector("#suggLetter");
let tries = document.querySelector("#try");

let noGuessedLetter = [];

let essai = 8;

//! Generate word in different p in HTML

word.forEach((word, index) => {
  window.p = document.createElement("p");
  p.innerText = `${word}`;
  window.test = presentLetter.appendChild(p);
  test.className = "dNone";
  // For cheaters (or for your tests) -> console.log(window.test);
});

//! Event listener on input

input.addEventListener("input", () => {
  hangedOrNot();
});

//! F*cking complicated function:
// oninput -> we scan if userLetter is in the array.

function hangedOrNot() {
  //? Initialization no guessed letter
  let userLetter = input.value;
  noGuessedLetter.push(userLetter);
  suggLetter.innerText = `${noGuessedLetter}`;

  //? scan nodes values

  //? Count down tries

  input.value = "";
  tries.innerText = `Nombres d'essais restant: ${essai}`;
  essai--;

  let test2 = presentLetter.childNodes;

  test2.forEach((node) => {
    if (node.textContent == userLetter) {
      node.className = "dBlock";
    }
  });

  //? Initialization of the hanged man

  if (essai < 7) {
    const bottom = document.querySelector(".bottom");
    bottom.style.display = "block";
  }
  if (essai < 6) {
    const column = document.querySelector(".column");
    column.style.display = "block";
  }
  if (essai < 5) {
    const top = document.querySelector(".top");
    top.style.display = "block";
  }
  if (essai < 4) {
    const rode = document.querySelector(".rode");
    rode.style.display = "block";
  }
  if (essai < 3) {
    const head = document.querySelector(".head");
    head.style.display = "block";
  }
  if (essai < 2) {
    const body = document.querySelector(".body");
    body.style.display = "block";
  }
  if (essai < 1) {
    const leftLeg = document.querySelector(".leftLeg");
    leftLeg.style.display = "block";
  }
  if (essai < 0) {
    const rightLeg = document.querySelector(".rightLeg");
    rightLeg.style.display = "block";
    input.style.display = "none";

    //? Pop-up retry

    const retry = document.querySelector(".retry");
    retry.style.display = "flex";
    const btn = document.querySelector("button");
    btn.addEventListener("click", () => {
      window.location.reload();
    });
  }
}

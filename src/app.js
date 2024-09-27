/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here
let cardValues = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "A",
  "J",
  "Q",
  "K"
];

let cardPintas = ["♦", "♥", "♠", "♣"];

function elegirRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const valorAleatorio = elegirRandom(cardValues);
document.querySelector(".value").innerHTML = valorAleatorio;

const pintaAleatoria = elegirRandom(cardPintas);
document.querySelectorAll(".pinta").forEach(elementoPinta => {
  elementoPinta.innerHTML = pintaAleatoria;
  if (pintaAleatoria === "♥" || pintaAleatoria === "♦") {
    elementoPinta.style.color = "red";
  } else {
    elementoPinta.style.color = "black";
  }
});

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

function elegirRandom() {
  return cardValues[Math.floor(Math.random() * cardValues.length)];
}

const valorAleatorio = elegirRandom();

document.querySelector(".value").innerHTML = valorAleatorio;

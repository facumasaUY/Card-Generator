/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here

//Valores para las cartas
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

//Función tipica para generar un valor aleatorio
function elegirRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Permite generar una nueva carta recargando toda la página.
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

//Permite generar una nueva carta apretando un boton
function cartaAleatoriaBoton() {
  const nuevoValorAleatorio = elegirRandom(cardValues);
  document.querySelector(".value").innerHTML = nuevoValorAleatorio;
  const nuevaPintaAleatoria = elegirRandom(cardPintas);
  document.querySelectorAll(".pinta").forEach(elementoPinta => {
    elementoPinta.innerHTML = nuevaPintaAleatoria;
    if (nuevaPintaAleatoria === "♥" || nuevaPintaAleatoria === "♦") {
      elementoPinta.style.color = "red";
    } else {
      elementoPinta.style.color = "black";
    }
  });
}

const button = document.querySelector(".boton");
button.addEventListener("click", cartaAleatoriaBoton);

import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



window.onload = function() {
  //write your code here
  const arraySimbolo = ['♦','♠','♣','♥'];
  const arrayNumero = ['AS','1','2','3','4','5','6','7','8','9','10','J','Q','K'];
  let randomSimbolo = arraySimbolo[Math.floor(Math.random() * arraySimbolo.length)];
  let randomNumero = arrayNumero[Math.floor(Math.random() * arrayNumero.length)];
  console.log(randomSimbolo);
  console.log(randomNumero);

  const numero = document.getElementById("numero");
  numero.textContent = randomNumero; 

  const simbolosRojos = ['♦', '♥'];
  const colorClass = simbolosRojos.includes(randomSimbolo) ? 'red' : 'black';
  document.querySelectorAll('.simbolo').forEach(Elemento => {
    Elemento.textContent = randomSimbolo;
    Elemento.classList.remove('red','black');
    Elemento.classList.add(colorClass);
  });
};

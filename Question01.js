/*
1° Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
valor correspondente em graus Fahrenheit.

*/

const prompt = require('prompt-sync')();
let celcius = prompt("Digite a temperatura em Celcius: ");

function converterTemperatura(celcius) {
  farenheit = (1.8 * celcius) + 32;

  console.log("Resposta da questão 01:",farenheit.toFixed(2)); //arredonda para o numero de casa dentro dos parenteses.
  console.log("\nA partir daqui são apenas estudos");
  console.log(Math.round(farenheit));//arrendonda para o inteiro mais proximo.
  console.log(farenheit.toLocaleString('pt-BR',
  { style:'currency', currency:'BRL' })); //arredonda e formata para a moeda desejada.
  console.log(Math.ceil(farenheit)); //arredonda para o inteiro maior mais proximo
  console.log(Math.floor(farenheit));//arredonda para o numero inteiro menor mais proximo
  console.log("Estudos terminam aqui.");
  
}

converterTemperatura(celcius);


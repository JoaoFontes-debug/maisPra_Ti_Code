//10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require('prompt-sync')();
let Number = prompt("Type the number: ");

function readNumber(p_Number){

    for(let i =1; i<=10; i++){
        console.log(i,"° Typed Number:", p_Number,"\n");    

    }
}

readNumber(Number);
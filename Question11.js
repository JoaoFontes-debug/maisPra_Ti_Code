/**
 * 11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou NEGATIVO.
 */

const prompt = require('prompt-sync')();

function readValues (){
    do{
        Numbers = parseInt(prompt("Type the Number: "));
        if(Numbers === null || Numbers < 0 || isNaN(Numbers)){ 
            console.log("Please! Type the Number."); 
            break;
        }else if(Numbers%2 ===0){
            console.log(Numbers," is Even.");
        }else{
            console.log(Numbers," is Odd.");
        }

    }while(true);

}

readValues();






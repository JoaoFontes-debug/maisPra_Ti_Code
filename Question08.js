/**
 * 8. Escreva um algoritmo para ler 2 valores 
 * (considere que não serão lidos valores iguais)
 *  e escreve-los em ordem crescente.
 */


const prompt = require('prompt-sync')();
//digite o primeiro valor
value01 = prompt("Type the first number: ");
value02 = prompt("Type the second number: ");

function lowHighValue(value01,value02){
    
    if(value01 > value02){
        console.log("the order is as follows: ", value02,"followed by: ", value01);

    }else if(value01 < value02){
        console.log("the order is as follows: ", value01,"followed by: ", value02);
        // a ordem é a seguinte" value01" seguido por value02
    }else{
        console.log("equals values!");
    }

}

lowHighValue(value01,value02);
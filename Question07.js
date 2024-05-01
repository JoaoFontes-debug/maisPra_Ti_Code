/*
As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
*/
const prompt = require('prompt-sync')();
//forneça a quantidade de maçãs
let amountApple = Number(prompt("Provide the quantity of aplles: "));

function calculatesTotal(amount){
    let total;
    if(amount < 12){
         total = amount*0.3;
    }else if(amount >= 12){
         total = amount*0.25
    }
    //O custo total das maças é
    console.log("\nthe total cost of the aplles is: ",total.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'},"\n"));

}

calculatesTotal(amountApple);



/**
 * Fazer um algoritmo para receber números decimais até que o
 * usuário digite 0 e fazer a média aritmética desses números.
 */
const prompt = require('prompt-sync')();

let soma=0; 

function arithmeticMean(){
    let cont=0;
    let control =true;
    
    do{
        
        let decimal= Number(prompt("Type the number: "));
        if(decimal == 0){
            --cont;
            console.log("Close aplication!");
            control = false;
        }
        
        soma+=decimal;
        cont++;0

    }while(control)

    let average = soma/cont;

    console.log("Arithmetic Mean ",average.toFixed(2) );
}

arithmeticMean();
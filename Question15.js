/**15. Fazer um algoritmo para receber um número decimal e o peso de cada
 * número até que o usuário digite o número 0. Fazer a média ponderada
 * desses números e pesos respectivos.
 */


const prompt = require('prompt-sync')();

function arithmeticMean(){
    
    let control =true;
    let divisor =0;
    
    do{
        
        
        let decimal01= parseFloat(prompt("First Number : "));
        let Weight01= parseFloat(prompt("Weight: "));
        let decimal02= parseFloat(prompt("second Number : "));
        let Weight02= parseFloat(prompt("Weight: "));
        if(isNaN(decimal01) || isNaN(Weight01) || isNaN(decimal02) ||isNaN(Weight02) ){
            
            console.log("Please! Enter a number!");
            control = false;
            break;
        }
        divisor = Weight01+Weight02;
        mediaPonderada = ((decimal01*Weight01)+(decimal02*Weight02))/divisor;
        console.log("Media Ponderada ",mediaPonderada.toFixed(2) );


    }while(control)

    
}

arithmeticMean();
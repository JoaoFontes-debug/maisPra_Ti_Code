/**
 * Escreva um algoritmo que leia o código de
 *  origem de um produto e imprima a região
 * do mesmo:
 */

const prompt = require('prompt-sync')();
let code = Number(prompt("Enter the origin code: "));

function showRegion(P_code){
    switch(P_code){
        case 1:
            console.log("SOUTH"); //SUL
            break;
        case 2:
            console.log("EAST"); //LESTE
            break;
        case 4:
            console.log("WEST");//OESTE
            break;
        case 5:
        case 6:
            console.log("NORTHEAST");//NORDESTE
            break;
        case 7:
        case 8:
        case 9: 
            console.log("NORTH");//NORTE
            break;
        case 10:
        case 20:
            console.log("MID-WEST");//CENTRO-OESTE
            break;
        case 25:
        case 50:
            console.log("NORTHEAST");
            break;

        default: console.log("Imported Product!"); //produto importado


    }

}

showRegion(code);
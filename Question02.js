/*
2° Escreva um algoritmo para ler o número de eleitores de um município, o número de
votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
em relação ao total de eleitores.
*/


const prompt = require('prompt-sync')();

let totalEleitores = parseInt(prompt("Digite o total de eleitores: "));
let totalV_Brancos = parseInt(prompt("Digite o total de votos em branco: "));
let totalV_Nulos = parseInt(prompt("Digite o total de votos nulo: "));


function eleitores(totalEleitores, totalV_Brancos,totalV_Nulos){

    let V_Brancos=0;
    let V_Nulos=0;
    let totalV_Validos =0;

        if(totalV_Brancos <= totalEleitores && totalV_Nulos <= totalEleitores-V_Brancos && totalEleitores >= V_Brancos + V_Nulos){
            
            V_Brancos = totalV_Brancos;
            V_Nulos = totalV_Nulos;
            totalV_Validos = totalEleitores-(V_Brancos+V_Nulos);

            let percentualBrancos = (V_Brancos/totalEleitores)*100;
            let percentualNulos = (V_Nulos/totalEleitores)*100;
            let percentualValidos = (totalV_Validos/totalEleitores)*100;

            console.log("\nTotal de Eleitores: "+totalEleitores);
            console.log("Porcentual votos em Branco:"+percentualBrancos.toFixed(2)+"%");
            console.log("Porcentual votos Nulos:"+percentualNulos.toFixed(2)+"%");
            console.log("Porcentual votos Validos:"+percentualValidos.toFixed(2)+"%");
        

        }else{
            console.log("\nERRO!"+"Verifique se os dados estão corretos");
        }
        
}



eleitores(totalEleitores,totalV_Brancos, totalV_Nulos);
    
    

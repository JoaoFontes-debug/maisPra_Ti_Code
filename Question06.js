/*

6° Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

*/
const prompt = require('prompt-sync')();
const LadoA = Number(prompt("Tamanho do lado A: ")); 
const LadoB = Number(prompt("Tamanho do lado B: ")); 
const LadoC = Number(prompt("Tamanho do lado C: "));

function classificaTriangulo(LadoA,LadoB,LadoC){
    if(LadoA+LadoB>LadoC && LadoA+LadoC>LadoB && LadoB+LadoC>LadoA){

        if((LadoA===LadoB && LadoB !== LadoC) || (LadoA===LadoC && LadoC !== LadoB ) || (LadoB===LadoC && LadoC !== LadoA)){
            console.log("\nÉ um triangulo ISÓCELES");
        }else if((LadoA !== LadoB) && (LadoB !==LadoC)){

            console.log("\nÉ um triangulo ESCALENO");

        }else if((LadoA==LadoB) && (LadoB==LadoC)){
            console.log("\nÉ um triangulo EQUILATERO");
        }
        

    }else{
        console.log("Não é um triangulo.");
        
    }
}


classificaTriangulo(LadoA, LadoB, LadoC);
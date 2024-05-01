/**
 * Escreva um algoritmo para imprimir os 50 primeiros número primos maior
 * que 100.Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.
 */

function primeNumber(number, range) {
  let control = 0;
  let cardinalNumber =1;

  while(control < range){
    let notPrime = 0; 

    for(let j = 2; j< number; j++){
      
      if(number%j === 0){
        notPrime++;
        break;
      }
      
    }

    if(notPrime === 0){
      
      console.log(cardinalNumber++,"°", number, " é primo"); 
      control++;

    }
    number++;
    
  }
 
}

primo(101,50);


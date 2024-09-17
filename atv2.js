/******************************************************************************
2)  Escreva um programa que verifique, em uma string, a existência da letra ‘a’, 
seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

*******************************************************************************/

function verificarLetraA(str) {
    let contador = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i].toLowerCase() === 'a') {
        contador++;
      }
    }
  
    if (contador > 0) {
      return `A letra "a" aparece ${contador} vez(es) na string.`;
    } else {
      return 'A letra "a" não foi encontrada na string.';
    }
  }
  
// Exemplo de uso
  const frase = "A Amazônia é uma área de biodiversidade única.";
  console.log(verificarLetraA(frase));
  
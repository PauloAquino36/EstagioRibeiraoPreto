/******************************************************************************
1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, 
ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
*******************************************************************************/

function fibonacci(num) {
    let a = 0, b = 1, nextTerm;
  
    if (num === a || num === b) {
      return `O número ${num} pertence à sequência de Fibonacci.`;
    }
  
    while (b < num) {
      nextTerm = a + b;
      a = b;
      b = nextTerm;
    }
  
    if (b === num) {
      return `O número ${num} pertence à sequência de Fibonacci.`;
    } else {
      return `O número ${num} NÃO pertence à sequência de Fibonacci.`;
    }
  }
  
  // Exemplo de uso
  const numero = 21;
  console.log(fibonacci(numero));
  const numeroEx2 = 22;
  console.log(fibonacci(numeroEx2));
  
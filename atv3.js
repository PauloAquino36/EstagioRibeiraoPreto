/******************************************************************************
3) Observe o trecho de código abaixo: 
int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } 
imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA?

K = 1, depois K = 2, então SOMA = 0 + 2 = 2
K = 2, depois K = 3, então SOMA = 2 + 3 = 5
K = 3, depois K = 4, então SOMA = 5 + 4 = 9
K = 4, depois K = 5, então SOMA = 9 + 5 = 14
K = 5, depois K = 6, então SOMA = 14 + 6 = 20
K = 6, depois K = 7, então SOMA = 20 + 7 = 27
K = 7, depois K = 8, então SOMA = 27 + 8 = 35
K = 8, depois K = 9, então SOMA = 35 + 9 = 44
K = 9, depois K = 10, então SOMA = 44 + 10 = 54
K = 10, depois K = 11, então SOMA = 54 + 11 = 65
K = 11, depois K = 12, então SOMA = 65 + 12 = 77
O loop para quando K chega a 12, pois a condição K < 12 não será mais verdadeira. Portanto, o valor final de SOMA será 77.


*******************************************************************************/
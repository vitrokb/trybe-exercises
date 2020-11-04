/* Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
Bonus: use somente um if.*/

function verificaImpar (num1, num2, num3) {
    if (num1 %2 != 0 || num2 %2 != 0 || num3 %2 != 0) {
        return("true");
    } else {
        return("false");
    }
}

console.log(verificaImpar(4, 2, 10));

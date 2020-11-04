/* Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
Bonus: use somente um if. */

function verificaPar (num1, num2, num3) {
    if (num1%2 == 0 || num2%2 == 0 || num3%2 == 0) {
        return("true");
    } else {
        return("false");
    }
}

console.log(verificaPar(1, 5, 3));

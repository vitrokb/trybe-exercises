//Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

function comparaMaisElementos (a, b, c) {
    if (a > b) {
        if (a > c) {
            return (a);
        } else {
            return (c);
        }
    } else {
        if (b > c){
            return (b);
        } else {
            return (c);
        }
    }
}

console.log(comparaMaisElementos(5,6,7));

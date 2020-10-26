/*Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.*/


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0
let iterador = 0
for (let i = 0; numbers.length > i; i += 1) {
    soma = soma + numbers[i];
    iterador += 1
}
console.log(soma/iterador)
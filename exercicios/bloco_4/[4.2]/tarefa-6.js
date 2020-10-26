//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0
for (let i = 0; numbers.length > i; i += 1) {
    if (numbers[i]%2 != 0) {
        impar += 1;
    }
}
if (impar == 0) {
    console.log("Nenhum valor ímpar encontrado.")
} else {
    console.log(`Há ${impar} valores impares no array.`)
}
//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let numbers = [];
let numbersDividido = [];
for (i = 1; i < 26; i += 1) {
    numbers.push(i);
    numbersDividido.push(i/2);    
}
console.log(numbersDividido)
/* Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
 */

function convertePorcentagem (nota) {
    if (nota > 100 || nota < 0) {
        return("Erro: O valor não está contido entre 100 e 0.")
    } else if (nota >= 90) {
        return("A");
    } else if (nota >=80) {
        return("B");
    } else if (nota >=70) {
        return("C");
    } else if (nota >=60) {
        return("D");
    } else if (nota >=50) {
        return("E");
    } else if (nota < 50) {
        return("F");
    }
}

console.log(convertePorcentagem(100))

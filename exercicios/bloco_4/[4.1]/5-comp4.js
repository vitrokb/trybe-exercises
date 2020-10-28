//Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.


function somaAngulosTriangulo (a, b, c) {
    if (a+b+c == 180) {
        return(true);
    } else if (typeof(a+b+c) != Number) {
        return("Erro: Ângulo Inválido!");
    } else {
        return(false)
    }
}

console.log(somaAngulosTriangulo(45,45,90));

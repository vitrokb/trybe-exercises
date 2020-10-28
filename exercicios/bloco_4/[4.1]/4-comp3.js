//Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.


function testaNumero (a) {
    if (a > 0) {
        return("Positivo");
    } else if (a < 0) {
        return("Negativo");
    } else {
        return("O valor é 0.");
    }
}

console.log(testaNumero(0));

let a = 10;
let b = 15;


if (a < 0 || b < 0) {
    console.log("Erro: Um dos valores é menor que 0.")
} else {
    let valorDeCusto = a+(a*0.20);
    let valorFinal = (b-valorDeCusto)*1000;
    console.log(valorFinal);
}
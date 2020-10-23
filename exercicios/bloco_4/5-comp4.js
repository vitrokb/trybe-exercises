let a = 90;
let b = 45;
let c = 45;

if (a+b+c == 180) {
    console.log(true);
} else if (typeof(a+b+c) != Number) {
    console.log("Erro: Ângulo inválido!");
} else {
    console.log(false);
}
let peca = "BISPO";
let pecaMin = peca.toLowerCase();

if (pecaMin == "peao") {
    console.log("O peão anda apenas para frente, se for a jogada inicial, pode avançar duas casas.");
} else if (pecaMin == "torre") {
    console.log("A torre se movimenta na horizontal e vertical.");
} else if (pecaMin == "cavalo") {
    console.log("O cavalo se movimenta em L, movimentando uma casa para o lado e duas para frente. Podendo passar por cima de qualquer peça, desde que o destino seja um espaço vazio.");
} else if (pecaMin == "bispo") {
    console.log("O bispo se movimenta nas diagonais.");
} else if (pecaMin == "rainha") {
    console.log("A rainha se movimenta em todas as direções e quantas casas desejar.");
} else if (pecaMin == "rei") {
    console.log("O rei se movimenta em todas as direções, movimentando 1 casa por vez.");
} else {
    console.log("Erro: Está peça não faz parte do xadrex.");
}
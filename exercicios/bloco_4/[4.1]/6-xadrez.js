//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.


function movimentoXadrez (peca) {
    pecaMinusculos = peca.toLowerCase();
    if (pecaMinusculos == "peao") {
        return("O peão anda apenas para frente, se for a jogada inicial, pode avançar duas casas.");
    } else if (pecaMinusculos == "torre") {
        return("A torre se movimenta na horizontal e vertical.");
    } else if (pecaMinusculos == "cavalo") {
        return("O cavalo se movimenta em L, movimentando uma casa para o lado e duas para frente. Podendo passar por cima de qualquer peça, desde que o destino seja um espaço vazio.");
    } else if (pecaMinusculos == "bispo") {
        return("O bispo se movimenta nas diagonais.");
    } else if (pecaMinusculos == "rainha") {
        return("A rainha se movimenta em todas as direções e quantas casas desejar.");
    } else if (pecaMinusculos == "rei") {
        return("O rei se movimenta em todas as direções, movimentando 1 casa por vez.");
    } else {
        return("Erro: Está peça não faz parte do xadrex.");
    }

}

console.log(movimentoXadrez("Bispo"))

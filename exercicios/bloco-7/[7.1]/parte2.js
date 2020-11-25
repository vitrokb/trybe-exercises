//função para achar fatorial de um numero
const numero = 5;
let res = numero;
const fatorial = () => {
  for (i = (numero-1); i > 0; i -= 1) {
    res = res * i;
  }
  return(res)
}
console.log(fatorial(numero))

//função para retornar a maior palavra de uma string
const maiorPalavra = (frase) => {
  let array = (frase.split(' '));
  let palavra = '';
  let palavraInt = parseInt(palavra.length);
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > palavraInt) {
      palavra = array[i];
    }
  }
  return console.log(palavra)
}
maiorPalavra("Antônio foi no banheiro e não sabemos o que aconteceu");

//função para criar um botão e imprimir a contagem de clicks desse botão em uma pagina html
let contaClick = 0;
const btn = document.getElementById('clickCount');
btn.addEventListener('click', (click) => {
  contaClick += 1;
  let contadorTela = document.getElementById('clickCountScreen');
  contadorTela.innerHTML = contaClick;
});


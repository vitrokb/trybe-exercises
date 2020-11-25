const testingScope = (escopo) => { 
  if (escopo === true) { 
    let ifScope = `Não devo ser utilizada fora do meu escopo (if).`;
    ifScope = `${ifScope} Ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = `Não devo ser utilizada fora meu escopo (else).`;
    console.log(elseScope);
  }
  console.log(`Olá`); // Se necessário esta linha pode ser removida.
}

testingScope(false);


const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const ordenaArray = (array) => {
  let arrayOrdenado = array.sort((function (a,b) {return a-b}));
  return arrayOrdenado;
}

console.log(`Os números ${ordenaArray(oddsAndEvens)} se encontram ordenados de forma crescente!.`);



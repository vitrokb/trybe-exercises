//Ordene o array numbers em ordem decrescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (i=1; i < numbers.length; i += 1){
    for (j=0; j<numbers.length; j +=1){
        if (numbers[i] > numbers[j]){
            let pos = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = pos;
        }
    }
}
console.log(numbers)
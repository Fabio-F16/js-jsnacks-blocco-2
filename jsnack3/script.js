// console.log('js ok')


// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
//  fino a quando ne avrà tanti quanti l’altro.


// chiamo gli array con lunghezze diverse
const lungoArray = [1, 2, 3, 4, 5, 6, 7, 8];
const cortoArray = [1, 2, 3, 4, 5, 6];
console.log(lungoArray.length);
console.log(cortoArray.length);

// dichiaro la variabile per il do
let i = 0;

// do con istruzione e incremento
do{
    cortoArray.push(Math.floor(Math.random() * 10)+1);

    i++;
}
while(lungoArray.length != cortoArray.length); // condizione di uscita

console.log(lungoArray.length);
console.log(cortoArray.length);

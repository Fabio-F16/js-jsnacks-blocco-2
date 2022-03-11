// Crea un array di numeri interi 
// e fai la somma di tutti gli elementi che sono in posizione dispari.



const numeriInteri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeriInteri)
let somma = 0;

for(let i = 0; i < numeriInteri.length; i++){
    console.log(numeriInteri[i])
    if(i % 2 !== 0){
        somma += numeriInteri[i];
    }
}

console.log('la somma dei numeri con indice dispari è ' + somma);
// Crea un array di numeri interi 
// e fai la somma di tutti gli elementi che sono in posizione dispari.

const numeriInteri = [];


const lunghezza = Math.floor(Math.random()*10)+1;

for(let i = 0; i < lunghezza; i++){
    const randomNumber = Math.floor(Math.random()*10)+1;
    numeriInteri.push(randomNumber);
}
console.log(numeriInteri);


let somma = 0;
for(let i = 0; i < numeriInteri.length; i++){
    
    if(i % 2 !== 0){
        somma += numeriInteri[i];
    }
}

console.log('la somma dei numeri con indice dispari è ' + somma);
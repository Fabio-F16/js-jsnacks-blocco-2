console.log('js okk');

// Il software deve chiedere per 5 volte all’utente di inserire un numero. 
// Il programma stampa la somma di tutti i numeri inseriti. 
// Esegui questo programma in due versioni, con il for e con il while.

// CON IL FOR

// let somma = 0;

// for (let i = 0; i < 5; i++){

//     let number = parseInt(prompt('Inserisci un numero!!'));
   
//     if(isNaN(number)){
//         number = parseInt(prompt("Non hai inserito un numero, inserisci un numero"));
//     }
//     somma += number;
// }

// console.log('la somma è ' + somma);


// CON IL WHILE

let somma = 0;

let i = 0; // chiamo variabile per ciclo while
while(i < 5){ // imposto la (condizione)

    let number = parseInt(prompt('Inserisci un numero!!'));

    if(isNaN(number)){
        number = parseInt(prompt("Non hai inserito un numero, inserisci un numero"));
    }
    
    somma += number;
    
    i++ //incremento
}
console.log('la somma è ' + somma);
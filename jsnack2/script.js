console.log('js okk');

// Il software deve chiedere per 5 volte all’utente di inserire un numero. 
// Il programma stampa la somma di tutti i numeri inseriti. 
// Esegui questo programma in due versioni, con il for e con il while.



// 

// for (let i = 0; i < 5; i++){

//     let number = parseInt(prompt('Inserisci un numero!!'));
   
//     if(isNaN(number)){
//         number = parseInt(prompt("Non hai inserito un numero, inserisci un numero"));
//     }
//     somma += number;
// }

// 

let somma = 0;
let i = 0 

while(i < 5){

    let number = parseInt(prompt('Inserisci un numero!!'));

    if(isNaN(number)){
        number = parseInt(prompt("Non hai inserito un numero, inserisci un numero"));
    }
    
    somma += number;
    
    i++
}
console.log('la somma è ' + somma);
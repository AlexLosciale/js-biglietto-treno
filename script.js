/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

/*
1-preda dati dell'utente (numero km/eta del passeggiero)
    1.1-verifica se sono stati inseriti i dati correttamente
    1.2-modificare i dati del pront da stringhe a numeri
2-calcolare il prezzo del viaggio, addizionando il 0,21 ai km inseriti dal passeggiero 
    2.1-applicare uno sconto al risultato del costo del viaggio, comparato con l'eta del passeggiero
3-stampare il prezzo finale del viaggio, con in totlae in decimali.
*/

const prize = 0.21;

let kmViaggio = Number(prompt("inserisci i km di viaggio"));

let etaPersona = Number(prompt("inserisci la tua eta"));

let costo = (prize * kmViaggio);

let costoSconto = 0;

console.log("costo inziale: ", costo);

if (etaPersona < 18 ) {
    costoSconto = (costo / 100 * 20);
} else if (etaPersona >= 65) {
    costoSconto = (costo / 100 * 40);
}

console.log( "costo scontato: ",Number((costo - costoSconto).toFixed(2)));

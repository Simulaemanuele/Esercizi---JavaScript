/*Dichiarando la variabile globalmente la si può riutilizzare all'interno di funzioni e altre strutture,
  se invece si dichiara una variabile all'interno di una funzione lo scope sarà locale perciò la variabile stessa
  sarà valida solo all'interno di quella determinata funzione*/
   
let personName = 'Paul';

function canPlay() {
  if (true) {
     personName = 'Paul';
  }

  personName += ' plays football'; // Argh! personName is not defined

  console.log(personName);
}

canPlay();
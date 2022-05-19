function canPlay() {
  const personName = 'Paul'; //cambiando il tipo da let a const si ottiene appunto una costante che la rende quindi di sola lettura

  if (true) {
    personName = 'George'; // Argh! Voglio che personName sia una variabile di sola lettura
  }

  personName += ' plays football';

  console.log(personName);
}

canPlay();
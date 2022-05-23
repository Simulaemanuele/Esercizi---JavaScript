const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  address: {
    state: 'Italy',
    region: 'Lazio',
    city: 'Rome'
  }
};

// Argh! Nonostante abbia utilizzato Object.assign(), modificando la proprietà "address",
// viene modificato il riferimento all'oggetto person1

//Con il metodo JSON.stringify() e JSON.parse(), si traduce l'oggetto in una stringa in sintassi JSON permettendo di fare un deep copy
// e successivamente ritradurre la stringa JSON in oggetto in modo da aver creato un oggetto differente e poterlo modificare a piacimento
// anche nei campi in cui un oggetto è dentro un altro oggetto.

const person2Stringify = JSON.stringify(person1);
const person2 = JSON.parse(person2Stringify);

person2.address.region = 'Lombardia';
person2.address.city = 'Milan';

console.log(person1);
console.log(person2);
const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  // code here

 return new Promise(function(resolve,reject){
   persons.find((item) => item.id === id) ? resolve(persons.find((item) => item.id === id)) : reject(new Error(`Person id: ${id} not found\n`))
 });
}

// code here

const myPromise1 = fetchPersonById(1);
const myPromise2 = fetchPersonById(2);
const myPromise3 = fetchPersonById(3);

const myPromise4 = fetchPersonById(4);

myPromise1.then((value) => console.log(value));
myPromise2.then((value) => console.log(value));
myPromise3.then((value) => console.log(value));
myPromise4.catch((value) => console.log(value));
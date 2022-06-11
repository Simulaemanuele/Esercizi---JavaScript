const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const replacer = (key,value) => typeof value === 'string' ? undefined : value;

const json = JSON.parse(JSON.stringify(person, replacer));

console.log(json); // Should return: { id: 1, age: 25 }
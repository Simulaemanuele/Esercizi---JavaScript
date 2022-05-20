function getKeys(obj) {
  let objectPerson = [];

  for (let i in obj) {
    objectPerson.push(i);
  }
  return objectPerson;
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);
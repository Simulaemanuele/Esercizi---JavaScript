const person = {
  firstName: 'John',
  lastName: 'Doe'
};

console.log('Oggetto person: \t')
console.log(person);

//console.log(person.address.city);  Argh! Cannot read property 'city' of undefined
//console.log(person.fullName());  Argh! Cannot read property 'fullName()' of undefined

if(person.address) {
  console.log(person.address.city);
} else {
  console.log('La proprietà "city" non esiste!\n')
};

if(person.fullName){
  console.log(person.fullName());
} else {
  console.log('La funzione "fullName()" non esiste! \n')
}

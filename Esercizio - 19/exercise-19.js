const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

// Modifica la proprietà "firstName" di person2 in "Simon"

person2.firstName ='Simon';

console.log(person1);
console.log(person2);

//Danno lo stesso output in quanto il passaggio avviene per valore di conseguenza sia person1 e person2 si riferiscono allo stesso oggetto
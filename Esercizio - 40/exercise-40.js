class Person {
  constructor(firstName,lastName,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get firstName(){
    return this._firstName;
  }

  set firstName(value){
    value = value.trim();
    if(value === '') {
      throw 'The first name cannot be empty';
    }
    this._firstName = value;

    //value === '' || value === undefined ? console.log('The first name cannot be empty')  : this._firstName = value;
  }

  get lastName(){
    return this._lastName;
  }

  set lastName(value){
    value = value.trim();
    if(value === ''){
      throw 'The last name cannot be empty'
    }
    this._lastName = value;

    //value === '' || value === undefined ? console.log('The last name cannot be empty')  :  this._lastName = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if(value === 0 || value === undefined){
      throw 'The field <age> cannot be empty'
    }
    this._age = value;
    
    //value === 0 || value === undefined ? console.log('The field <age> cannot be undefined')  : this._age = value;
  }

  get fullName(){
    return `${this.firstName} ${this.lastName}`
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);
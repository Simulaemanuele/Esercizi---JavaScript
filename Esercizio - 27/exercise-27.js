const person = {
  firstName: 'John',
  lastName: 'Doe'
};

console.log('Oggetto person: \t')
console.log(person);

// Using .? operator in console.log() I can bypass the error

    console.log(person?.address?.city);  //Argh! Cannot read property 'city' of undefined
    console.log(person?.fullName?.());  //Argh! Cannot read property 'fullName()' of undefined

// Here's the same but in a ternary operator that it permitt to valutate that the two properties inexistence

    person?.address?.city ? console.log(person.address.city) : console.log('La proprietà city non esiste!\n');

    person?.fullName?.() ? console.log(person.fullName()) : console.log('La funzione "fullName()" non esiste! \n');


// Previous wrong version to review

    /*if(person.address) {
      console.log(person.address.city);
    } else {
      console.log('La proprietà "city" non esiste!\n')
    };

    if(person.fullName){
      console.log(person.fullName());
    } else {
      console.log('La funzione "fullName()" non esiste! \n')
    }*/

// .? operator correction done

    /*if(person?.address?.city){
      console.log(person.address.city);
    } else {
      console.log('La proprietà "city" non esiste!\n')
    };*/



    /*if(person?.fullName?.()){
      console.log(person.fullName());
    } else {
      console.log('La funzione "fullName()" non esiste! \n')
    };*/



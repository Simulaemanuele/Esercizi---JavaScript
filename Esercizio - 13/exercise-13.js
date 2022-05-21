let add1 = 2;

let add2 = 4;

let add3 = 5;

let add4 = 2;

let subtractor = 2;

let divider = 5;


const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const log = (value) => console.log(value);

//É l'unico modo con cui sono riuscito a restituire la stringa, in alternativa come potrei fare?!

let expressionString = `((${add1} + ${add2}) * (${add3} + ${add4}) - ${subtractor}) / ${divider}`;

log(expressionString);

log(divide(subtract(multiply(sum(add1, add2), sum(add3, add4)), subtractor), divider));






 sum = (...num) => num.reduce((preValue, currValue) => preValue + currValue,0);

/*function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}*/

const numbers = [1, 2, 3];
console.log(sum(...numbers));

//test reduce version

const numbers2 = [1, 2, 3, 4, 5, 6];
console.log(sum(...numbers2));
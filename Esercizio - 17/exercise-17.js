function calculate() {
  let result = 0;

  return {
    add: function(n) {
      result += n;
      return this;
    },

    multiply: function(n) {
      result *= n;
      return this;
    },

    sub: function(n) {
      result -= n;
      return this;
    },

    divide: function(n) {
      result /= n;
      return this;
    },

    printResult: function() {
      console.log(result);
    }
  }
};

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7
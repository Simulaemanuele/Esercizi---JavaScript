class NegativeAmountError extends Error {
  constructor(errorMessage){
    super(errorMessage);
    this.name = 'Error: negative amount';
  }
}

class WithdrawNotPermittedError extends Error {
  constructor(errorMessage){
    super(errorMessage);
    this.name = 'Error: withdraw not permitted';
  }
}

class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount < 0) {
      //throw new Error('The amount provided cannot be negative'); // Use custom Error class
      throw new NegativeAmountError();
    }

    this.#amount += amount;
  }

  withdraw(amount) {
    if (amount < 0) {
      //throw new Error('The amount provided cannot be negative'); // Use custom Error class
      throw new NegativeAmountError();
    }

    if (this.#amount < amount) {
      //throw new Error('You cannot withdraw more than account balance'); // Use custom Error class
      throw new WithdrawNotPermittedError();
    }

    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}

try {
  const bankAccount = new BankAccount(1000);
  bankAccount.deposit(500);
  bankAccount.deposit(200);
  bankAccount.withdraw(10000);
  bankAccount.view();
} catch (e) {
  console.log('Something went wrong during bank account operations');
}

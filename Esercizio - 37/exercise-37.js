class BankAccount{

    constructor(basicImport){
        this.basicImport = basicImport;
    }

    view(){
        console.log(`Your current balance is: ${this.basicImport}\n`);
    }

    deposit(addedDeposit){
        this.basicImport += addedDeposit;
        console.log(`You added to your balance: ${addedDeposit}\n`);
        
    }

    withdraw(importToDrawn){
        this.basicImport -= importToDrawn;
        console.log(`Your withdrawn is equal to: ${importToDrawn} \n`);
        
    }

}
const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();
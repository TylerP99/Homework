// Account list

// Let's build upon a previous account object exercise. A bank account is still defined by:

//     A name property.
//     A balance property, initially set to 0.
//     A credit method adding the value passed as an argument to the account balance.
//     A describe method returning the account description.

// Write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges. These accounts are stored in an array. Next, the program credits 1000 to each account and shows its description.

// Execution result

class Account {
    constructor(name) {
        this.name = name;
        this.balance = 0;
    }

    credit(val) {
        this.balance += val;
    }

    describe() {
        console.log(`${this.name}'s account has a balance of ${this.balance} moneys.`);
    }
}

const accounts = [new Account("Sean"), new Account("Brad"), new Account("Georges")];
accounts.forEach(x => {
    x.credit(1000);
    x.describe();
})
let util = require("./queueUtility.js");
let readlineSync = require('readline-sync');

/*taking user input*/
Choice = function () {
    let isTerminated = true;
    while (isTerminated == true) {
        let ch = readlineSync.question("\nEner your choice:\n1.Enqueue\n2.Dequeue\n3.displayQueue\n4.Exit\n");
        switch (ch) {
            case '1': let userInput = readlineSync.question("Enter item to be push:");
                util.enque(userInput);
                break;
            case '2': util.dequeue();
                break;
            case '3': util.displayQueue();
                break;    
            case '4': isTerminated = false;
                break;
            default: console.log("Invalid choice!!Please enter valid choice");
        }
    }
}
Choice();

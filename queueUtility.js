class Queue {
    constructor() {
        this.items = [];
        this.counter = 0;
    }
    /*add elements to queue*/
     enque = (newItem) => {
        this.items.push(newItem);
        console.log(`At position ${this.counter} Stack: ${newItem}`);
        this.counter++;
    }
    //to dequeue elements
    dequeue = () => {
        if (this.items.length == 0) {
            console.log(`The queue is empty`);
        }
        else { 
        console.log(`Deleted item is ${this.items[0]}`);
        /*to shift the items*/
        this.items.shift();
    }
}
    /*to display all the items*/
    displayQueue = () => {
        if (this.items.length == 0) {
            console.log("The queue is empty");
        }
        else {
            console.log(`${this.items} @position 1 to ${this.items.length}`);
        }
    }
}
module.exports = new Queue();
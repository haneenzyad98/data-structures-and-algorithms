'use strict';

let { Stack } = require('../stacksAndQueues/stacks-and-queues')

class PseudoQueue {
  constructor() {
    this.Stackone = new Stack();
    this.Stacktwo = new Stack();
  }

  enqueue(value) {
    this.Stackone.push(value);
  }

  dequeue() {
    if (this.Stackone.top) {
      return this.Stackone.pop();

    }
    return null;
  }
}

module.exports = PseudoQueue;



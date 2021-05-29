'use strict';

const Stack = require('../stacks-and-queues').Stack;
const Queue = require('../stacks-and-queues').Queue;

describe('Stack', ()=> {




    it('Can successfully push onto a stack', ()=> {
        let stack = new Stack();
        stack.push(0)
        stack.push(1)
        stack.push(2)
        expect(stack.top.value).toEqual(2);
        // expect(stack.top.next.value).toEqual(1);
        // expect(stack.top.next.next.value).toEqual(0);
    });

    it('Can successfully pop off the stack', ()=> {
        let stack = new Stack();
        stack.push(0);
        stack.push(1);
        stack.pop();
        stack.pop();
        expect(stack.top.value).toEqual(1);
       
    });

    
    it('Can successfully empty a stack after multiple pops', ()=> {
        let stack = new Stack();
        stack.push(0);
        stack.push(1);
        let item = stack.pop();
        expect(stack.top.value).toEqual(1);
        item = stack.pop();
        expect(item).toEqual('it is empty');
       
    });

    
    it('Can successfully instantiate an empty stack', ()=> {
        let stack = new Stack();
        expect(stack instanceof Stack).toBeTruthy();
    });

})
// -----------------------------------------------------
describe('Queue', ()=> {


    it('Can successfully enqueue into a queue', ()=> {
        let queue = new Queue();
        queue.enqueue(0)
        queue.enqueue(1)
        queue.enqueue(2)
        expect(queue.front.value).toEqual(0);
        expect(queue.front.next.value).toEqual(1);
        expect(queue.front.next.next.value).toEqual(2);
    });

    it('Can successfully dequeue out of a queue the expected value', ()=> {
        let queue = new Queue();
        queue.enqueue(0)
        queue.enqueue(1)
        queue.enqueue(2)        
        queue.dequeue();
        // expect(item).toEqual(0);
        expect(queue.front.value).toEqual(0);

    });

    it('Can successfully peek into a queue, seeing the expected value', ()=> {
        let queue = new Queue();
        queue.enqueue(0)
        queue.enqueue(1)
        expect(queue.peek()).toEqual(1);
      
    });
    
    it('Can successfully instantiate an empty queue', ()=> {
        let queue = new Queue();
        expect(queue instanceof Queue).toBeTruthy();
    });



})
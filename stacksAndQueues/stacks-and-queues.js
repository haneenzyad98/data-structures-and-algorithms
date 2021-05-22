'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    
    push(item) {
        let value = new Node(item);
        
        if (this.isEmpty()) {
            this.top = value; 
        }else{
            value.next = this.top;
            this.top = value
        }
        return this;
    }
    
    
    pop() {
        if (this.isEmpty()) {  
            return `it is empty`;
        }else{
            let x= this.top.value;
            
            this.top = this.top.next;
            return x;
        }
    }

    peek() {
        return this.top;
    }


    isEmpty() {

        if ( this.top===null){
            return false
        }
        return true;
    }
    
}
// ----------------------------------------------
class Queue {
    constructor() {
       this.front = null; 
    }

    enqueue(item) {
        let node = new Node(item);
        if (!this.front) {
            this.front = node;
        } else {
            let current = this.front;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        return this;
    }

    dequeue() {
        if (this.isEmpty()) {
            return `it is empty`;
        }else{
            let x= this.front.value;
            
            this.front = this.front.next;
            return x;
        }
    }

    peek() {
        return this.front;
    }

    isEmpty() {
        
        if ( this.front===null){
            return false
        }
        return true;

    }

}

module.exports={
    Stack,Queue
  };
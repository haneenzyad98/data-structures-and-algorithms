'use strict';

const Node = require('./node');

class LinkedList {
    
    constructor() {
        this.head = null;
    }

    insert(value) {
        let node = new Node(value);
        // if the linkedlist i empty
        if (!this.head) {
            this.head = node;
        } else {
            // if not empty 
            let currentNode = this.head;
            while(currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        return this;
    }


    // Define a method called includes which takes any value as an argument and returns a boolean 
    // result depending on whether that value exists as a Node’s value somewhere within the list.
    includes(value) {
    let current =this.head;
    while (current!=null) {
        if(current.value == value){
            current = current.next;
            return true;
        }
        return false;
    }
    }

    // Define a method called toString (or __str__ in Python) which takes in no arguments and returns a
    //  string representing all the values in the Linked List, formatted as:
    // "{ a } -> { b } -> { c } -> NULL"
    
    toString(){
        let current =this.head;
        let x='';
        while (current!=null) {
            x +=`{${current.value}}->`;
            current=current.next;
        }
        return  x;
    }

    
    // ===========================
    
    insertBefore(value, newVal) {
        let node = new Node(newVal);
        let currentNode = this.head;
        if(this.head){
                if(currentNode.value===value){
                    node.next=currentNode;
                    this.head=node;
                }
                while(currentNode.next){
                    if(currentNode.next.value===value){
                        let tempNode=currentNode.next;
                        currentNode.next=node;
                        node.next=tempNode;
                    }
                    currentNode=currentNode.next;
                }
            }
            return 'Exception';
            
            
        }
        
        insertAfte(value, newVal) {
                let node = new Node(newVal);
        if(this.head){
          let currentNode = this.head;
            while(currentNode.next){
                  if(currentNode.next.value===value){
                        let Node=currentNode.next;
                        currentNode.next=node;
                        node.next=Node;
            
                      }
                      currentNode=currentNode.next;
                    }
                  }
          return 'Exception';
        }
    

    // ===========================================
    
    
    
    
    FromEnd(k) {
    let currentNode = this.head;
    let ncurrentNode = this.head;
    let z=0;
    // if the linkedlist i empty
    if (!this.head || k < 0) {
        return 'Exception';
    }
    
    for (let i = 0; i < k - 1; i++) {
        if (!currentNode) {
            return 'Exception';
        }
        currentNode = currentNode.next;
        z++;
    }
    while (ncurrentNode.next) {
        ncurrentNode = ncurrentNode.next;
        currentNode = currentNode.next;
    }
    return ncurrentNode.value;
    
}
}

module.exports = LinkedList;
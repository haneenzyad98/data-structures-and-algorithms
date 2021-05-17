'use strict';

const Node = require('./node');

class LinkedList {
    
    constructor() {
        this.head = null;
    }
    append(value) {
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

    // ===========================

    insertBefore(value, newVal) {
        let node = new Node(value);
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
// ===========================================
insertAfte(value, newVal) {
    let node = new Node(value);
  

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
}





    module.exports=LinkedList;

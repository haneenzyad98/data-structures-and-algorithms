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
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        return this;
    }

    toString(){
        let current =this.head;
        let x='';
        while (current!=null) {
            x +=`{${current.value}}->`;
            current=current.next;
        }
        return  x;
    }

    zip(list1, list2) {
        let list = new LinkedList();
        let current1 = list1.head;
        let current2 = list2.head;

        while (current1 !=null && current2 !=null) {
     
            if(current1){
                list.insert(current1.value)
                current1=current1.next
            }

            if(current2){
                list.insert(current2.value)
                current2=current2.next
            }
        }
        console.log(list);
        return list;
       
    }
}
module.exports = LinkedList;
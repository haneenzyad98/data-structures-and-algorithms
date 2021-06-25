'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);
        if (!this.root) {
            this.root = node; 
        } else {
            // this will add to start 
            // node.next = this.root;
            // this.root = node;
            
            // add it to the end
            const current = this.root;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }

    getValues () {
        let current = this.root;
        const output = [];
        while (current) {
            output.push(current.value);
            current = current.next;
        }
        return output;
    }
    includes(key) {
        let currentNode = this.root;
        let checked = false;
        while(currentNode.next) {
            if(currentNode.value[key]) checked = true;
            currentNode = currentNode.next;
        }
        if(currentNode.value[key]){
            checked = true;
        }
        return checked;
    }
}


class Hashtable {
    constructor (size) {
        this.size = size;
        this.table = new Array(size);
    }

    hash(key) {
        const sum = key.split('').reduce((acc, v) => acc + v.charCodeAt(0), 0);
        console.log("sum : ", sum);
        return (sum * 19) % this.size;
    }

    add(key,value) {
        const hashed = this.hashed(key);
        if (!this.table[hashed]) {
            this.table[hashed]=new LinkedList();
        } else {
            const current = this.root;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }
    set(key, value) {
     
        const hashed = this.hash(key);
        if (!this.table[hashed]) {
            this.table[hashed] = new LinkedList();
        } 
        this.table[hashed].add({ [key] : value} ); 
    }


    get(key) {
        const index = this.hash(key)
        const element = this.table[index]
        if(!element) return null;
        return element.getValues(key)
    }
}

module.exports = Hashtable;
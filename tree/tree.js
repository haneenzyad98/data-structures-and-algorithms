'use strict';
let { Queue, Stack } = require('../stacksAndQueues/stacks-and-queues')
class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}




class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    preOrder() {
        try {

            let results = [];
            let traverse = (node) => {
                results.push(node.value);
                if (node.left) traverse(node.left);
                if (node.right) traverse(node.right);
            }
            traverse(this.root);
            return results;
        } catch (err) {
            console.log(err);
        }
    }


    inOrder() {
        try {
            let results = [];
            let traverse = (node) => {
                if (node.left) traverse(node.left);
                results.push(node.value);
                if (node.right) traverse(node.right);
            }
            traverse(this.root);
            return results;
        } catch (err) {
            console.log(err);
        }
    }


    postOrder() {
        try {

            let results = [];
            let traverse = (node) => {
                if (node.left) traverse(node.left);
                if (node.right) traverse(node.right);
                results.push(node.value);
            }
            traverse(this.root);
            return results;
        } catch (err) {
            console.log(err);
        }
    }

    findmaximumvalue() {
        let results = [];
        let traverse = (node) => {
            results.push(node.value)
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root)
        let x = 0
        for (let i = 0; i < results.length; i++) {
            if (results[i] > x) {
                x = results[i]
            }
            
        }return x;

    }

    breadthfirsttraversal(){
        let results = [];
        let newarr =[];
    let traverse = (node) => {
        results.push(node.value)
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        console.log(results);
    }
    traverse(this.root)

    const node = results.shift();
    for (let i = 0; i < results.length; i++) {
        if (node.left) {
            newarr.push(node.left.value )
        }
        if (node.right){
            newarr.push(node.right.value)
        }
    }
       return newarr;
        
      }

}

class BinarySearchTree {
    constructor(root = null) {
        this.root = root;
    }

    add(val) {
        try {
            let newn = new Node()
            newn.value = val;
            if (this.root == null) {
                this.root = newn;
                return this;
            }
            let current = this.root;
            while (current) {
                if (newn.value > current.value) {
                    if (current.right == null) {
                        current.right = newn;
                        return this;
                    }
                    current = current.right;
                } else if (newn.value < current.value) {
                    if (current.left == null) {
                        current.left = newn;
                        return this;
                    }
                    current = current.left
                }
                if (newn.value == current.value) {
                    return this;
                }
            }
            if (!current) {
                current = newn;
            }
            return this;
        } catch (err) {
            console.log(err);
        }
    }

    contains(val) {
        try {
            let current = this.root;
            while (current) {
                if (val > current.value) {
                    if (current.right == null) {
                        return false;
                    }
                    current = current.right;
                } else if (val < current.value) {
                    if (current.left == null) {
                        return false;
                    }
                    current = current.left
                }
                if (val == current.value) {

                    return true;
                }
            }
            return false;
        } catch (err) {
            console.log(err);
        }
    }



}


module.exports =
{
    Node,
    BinaryTree,
    BinarySearchTree

}
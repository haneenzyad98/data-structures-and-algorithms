'use strict';

// const BinaryTree = require('../tree').BinaryTree;
// const BinarySearchTree = require('../tree').BinarySearchTree;
// const Node = require('../tree').Node;

const { Node, BinaryTree, BinarySearchTree } = require('../tree.js');

let tree = null;
describe('Binary Tree', ()=> {

    beforeAll(()=> {
        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);
        let six = new Node(6);
        let seven = new Node(7);
        let eight = new Node(8);
        let nine = new Node(9);

        one.left = two;
        one.right = three;
        two.left = six;
        six.right = seven;
        seven.left = eight;
        seven.right = nine;
        three.left = four;
        three.right = five;

        tree = new BinaryTree(one);
    });

    it ('constructor', ()=> {
        let newTree = new BinaryTree();
        expect(newTree.root).toBeNull();
    });

    it ('preOrder', ()=> {
        let expected = [1, 2, 6, 7, 8, 9, 3, 4, 5];
        let preOrderResult = tree.preOrder();
        console.log("preOrderResult: ", preOrderResult)
        expect(preOrderResult).toEqual(expected);
        
    });

    it ('inOrder', ()=> {
        let expected = [6, 8, 7, 9, 2, 1, 4, 3, 5];
        let inOrderResult = tree.inOrder();
        console.log("inOrderResult: ", inOrderResult)
        expect(inOrderResult).toEqual(expected);
    });

    it ('postOrder', ()=> {
        let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
        let postOrderResult = tree.postOrder();
        console.log("postOrderResult: ", postOrderResult)
        expect(postOrderResult).toEqual(expected);
    });

    it ('instantiate a tree with a single root node', ()=> {
        let newt = new BinarySearchTree();
        newt.add(11)
        expect(newt.root.value).toEqual(11);
    });

    it (' returne true or false if the tree contain value', ()=> {
        let newt = new BinarySearchTree();
        newt.add(1)
        newt.add(2)
        newt.add(3)
       
        expect(newt.contains(1)).toEqual(true);
        expect(newt.contains(2)).toEqual(true);
        expect(newt.contains(5)).toEqual(false);
        expect(newt.contains(10)).toEqual(false);
    });

    it('Find the Maximum Value in a Binary Tree ', () => {

        let expected =9;
        let preOrderResult = tree.findmaximumvalue();
        expect(preOrderResult).toEqual(expected);
      });
});
'use strict';

const fizzBuzzTree = tree => {
  if (typeof tree !== 'object') {
    return null;
  }

  let current;
  if (tree.root) {
    current = tree.root;
  } else if (tree.data) {
    current = tree;
  } else {
    return tree;
  }
  if (current.data % 3 === 0 && current.data % 5 === 0) {
    current.data = 'FizzBuzz';
  } else if (current.data % 3 === 0) {
    current.data = 'Fizz';
  } else if (current.data % 5 === 0) {
    current.data = 'Buzz';
  }

  if (current.left) {
    fizzBuzzTree(current.left);
  }
  if (current.right) {
    fizzBuzzTree(current.right);
  }
  return tree;
};

module.exports = fizzBuzzTree;
'use strict';

const treeIntersection=(treeOne, treeTwo)=> {
  let firsttree = treeOne.root;
  let secondtree = treeTwo.root;
  const results = [];
 
  let traverse = (node1 , node2) => {
      if(node1.value == node2.value) results.push(node1.value);
      if (node1.left && node2.left) traverse(node1.left, node2.left);
      if (node1.right && node2.right) traverse(node1.right, node2.right);
  }
  traverse(firsttree, secondtree)
  return results;


  }

module.exports = treeIntersection;

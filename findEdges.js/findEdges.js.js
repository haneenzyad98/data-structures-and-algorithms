'use strict';

function finfEdge(graph, cityArray) {
  let totalCost = 0;
  let check = false;

  for (let i = 0; i < cityArray.length - 1; i++) {
    let neighbors = graph.getNeighbors(cityArray[i]);
    // console.log(neighbors)
    for (let j = 0; j <= neighbors.length - 1; j++) {
    // console.log('cityArray[i]',cityArray[i])
    // console.log('cityArray[i + 1]',cityArray[i + 1])
    // console.log('neighbors[j].vertex',neighbors[j].vertex)
      if (cityArray[i + 1] === neighbors[j].vertex) {
        totalCost += neighbors[j].weight;
        check = true;
      }
    }
    if (check === false) {
      totalCost = 0;
      check = false;
      return `${check}, $${totalCost}`;
    }
  }

  return `${check}, $${totalCost}`;
}

module.exports = finfEdge;
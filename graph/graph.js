class Edge {
    constructor(vertex, weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
}

class Vertex {
    constructor(value) {
        this.value = value
    }
}


class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }

    addDirectedEdge(start, end, weight) {
        if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
            console.log("VERTEX DOES NOT EXIST");
            return;
        }
        const adjacencies =  this.adjacencyList.get(start);
        adjacencies.push(new Edge(end, weight));
    }

    print() {
        for (const [k, v] of myGraph.adjacencyList.entries()) {
            console.log("k---->", k);
            console.log("v---->", v);
        }
    }

    getNeighbours(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            console.log("VERTEX DOES NOT EXIST");
            return;
        }
        return this.adjacencyList.get(vertex);
 
   }
   size(){
    return this.adjacencyList.size
  }
}

module.exports = {Graph,Vertex}

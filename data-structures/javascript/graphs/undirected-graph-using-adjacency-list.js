class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList.has(vertex1)) {
      this.adjacencyList.get(vertex1).push(vertex2);
    }

    if (this.adjacencyList.has(vertex2)) {
      this.adjacencyList.get(vertex2).push(vertex1);
    }
  }

  printGraph() {
    for (let [vertex, neighbors] of this.adjacencyList.entries()) {
      console.log(`${vertex} -> ${neighbors.join(", ")}`);
    }
  }

  dfs(start) {
    const visited = new Set();
    const result = [];

    const dfsHelper = (vertex) => {
      visited.add(vertex);
      result.push(vertex);

      //   console.log(vertex, visited, result);

      for (let neighbor of this.adjacencyList.get(vertex)) {
        console.log(visited, neighbor);
        if (!visited.has(neighbor)) {
          dfsHelper(neighbor);
        }
      }
    };

    dfsHelper(start);
    return result;
  }

  bfs(start) {
    const visited = new Set();
    const queue = [start];
    const result = [];

    visited.add(start);

    while (queue.length > 0) {
      let vertex = queue.shift();
      result.push(vertex);

      for (let neighbor of this.adjacencyList.get(vertex)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    return result;
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "C");

// g.printGraph();

console.log(g.dfs("B"));

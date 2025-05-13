class Graph {
  constructor(size) {
    this.size = size;
    this.adjacencyMatrix = Array.from({ length: size }, () =>
      Array(size).fill(0)
    );
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyMatrix[vertex1][vertex2] = 1;
    this.adjacencyMatrix[vertex2][vertex1] = 1;
  }

  printMatrix() {
    console.log("Adjacency Matrix:");
    this.adjacencyMatrix.forEach((row) => {
      console.log(row.join(" "));
    });
  }
}

let g = new Graph(3);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
console.log(g);

g.printMatrix();

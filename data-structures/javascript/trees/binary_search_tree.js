class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    console.log(value);
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) return;

      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  inOrderTraversal(node) {
    if (!node) return;

    console.log(node.value);
    this.inOrderTraversal(node.left);
    this.inOrderTraversal(node.right);
  }
}

const bst = new BST();

[1, 2, 3, 4, 5, 6].forEach((v) => bst.insert(v));

bst.inOrderTraversal();

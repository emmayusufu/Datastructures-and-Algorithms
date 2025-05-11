class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BinaryTreeNode(5);
root.left = new BinaryTreeNode(1);
root.right = new BinaryTreeNode(9);
root.left.left = new BinaryTreeNode(7);
root.left.right = new BinaryTreeNode(8);
root.right.right = new BinaryTreeNode(3);
root.right.left = new BinaryTreeNode(4);

function printInOrder(node) {
  if (!node) return;
  console.log(node.value);
  printInOrder(node.left);
  printInOrder(node.right);
}

printInOrder(root);

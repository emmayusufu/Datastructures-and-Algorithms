class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(childNode) {
    this.children.push(childNode);
  }
}

class Tree {
  constructor(root) {
    this.root = root;
  }

  traverse(node) {
    if (!node) return;

    console.log(node.value);

    node.children.forEach((child) => {
      this.traverse(child);
    });
  }
}

const root = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);

root.addChild(node2);
root.addChild(node3);

node2.addChild(node4);
node2.addChild(node5);

node3.addChild(node6);

const tree = new Tree(root);

tree.traverse(tree.root);

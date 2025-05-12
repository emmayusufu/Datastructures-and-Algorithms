class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    thie.height = 1;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    this.root = this._insert(this.root, value);
  }

  _insert(node, value) {
    if (!node) return new Node(value);

    if (value < node.value) {
      node.left = this._insert(node.left, value);
    } else if (value > node.value) {
      node.right = this._insert(node.right, value);
    } else {
      return node;
    }

    node.height =
      1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));

    const balance = this._getBalance(node);

    if (balance > 1 && value < node.left.value) {
      return this._rightRotate(node);
    }

    if (balance < -1 && value > node.right.value) {
      return this._leftRotate(node);
    }

    if (balance > 1 && value > node.left.value) {
      node.left = this._leftRotate(node.left);
      return this._rightRotate(node);
    }

    if (balance < -1 && value < node.right.value) {
      node.right = this._rightRotate(node.right);
      return this._leftRotate(node);
    }

    return node;
  }

  _getHeight(node) {
    return node ? node.height : 0;
  }

  _getBalance(node) {
    return node ? this._getHeight(node.left) - this._getHeight(node.right) : 0;
  }

  _rightRotate(y) {
    const x = y.left;
    const T2 = x.right;

    x.right = y;
    y.left = T2;

    x.height = Math.max(this._getHeight(x.left), this._getHeight(x.right)) + 1;
    y.height = Math.max(this._getHeight(y.left), this._getHeight(y.right)) + 1;

    return x;
  }

  _leftRotate(x) {
    const y = x.right;
    const T2 = y.left;

    y.left = x;
    x.righ = T2;

    x.height = Math.max(this._getHeight(x.left), this._getHeight(x.right)) + 1;
    y.height = Math.max(this._getHeight(y.left), this._getHeight(y.right)) + 1;

    return y;
  }
}

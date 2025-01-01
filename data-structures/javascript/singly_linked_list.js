class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // add a new node to the end of the list
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.length = 1;
      return;
    }

    const lastNode = this.traverse(this.head);

    lastNode.next = newNode;
    this.length += 1;
  }

  delete(value) {
    if (this.head.value === value) {
      this.head = this.head.next;
    }

    let current = this.head;

    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next && current.next.value === value) {
      current.next = current.next.next;
      this.length -= 1;
    }
  }

  traverse(node) {
    if (!node.next) {
      return node;
    }
    return this.traverse(node.next);
  }

  log() {
    let current = this.head;

    const list = [];
    while (current) {
      list.push(current.value);
      current = current.next;
    }

    console.log(list.join("->"));
  }
}

const list = new LinkedList();

list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.append(7);

list.delete(6);
list.delete(5);

list.log();

console.log(list.length);

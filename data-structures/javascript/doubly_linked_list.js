class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  head = null;
  tail = null;
  length = 0;

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  printForward() {
    let current = this.head;
    const list = [];
    while (current) {
      list.push(current.value);
      current = current.next;
    }
    console.log(list.join("<=>"));
  }

  printReverse() {
    let current = this.tail;
    const list = [];
    while (current) {
      list.push(current.value);
      current = current.prev;
    }
    console.log(list.join("<=>"));
  }

  delete(value) {
    let current = this.head;

    while (current.value !== value) {
      current = current.next;
    }

    if (this.tail.value === current.value) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else if (this.head.value === current.value) {
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      current.prev.next = current.next;
      current.next.prev = current.prev;
    }
  }
}

const list = new DoublyLinkedList();

list.append(1);
list.append(2);
list.prepend(9);
list.prepend(4);
list.append(5);
list.append(6);
list.printForward();
list.delete(2);
list.delete(1);
list.printForward();

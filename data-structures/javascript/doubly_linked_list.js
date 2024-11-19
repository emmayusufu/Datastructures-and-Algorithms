class Node {
  data = null;
  next = null;
  prev = null;

  constructor(data) {
    this.next = null;
    this.prev = null;
    this.data = data;
  }
}

class DoublyLinked {
  head = null;
  tail = null;

  append(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  prepend(data) {
    let newNode = new Node(data);

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
    const arr = [];

    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    console.log(arr.join("<=>"));
  }

  printReverse() {
    let current = this.tail;
    const arr = [];

    while (current) {
      arr.push(current.data);
      current = current.prev;
    }

    console.log(arr.join("<=>"));
  }

  delete(data) {
    if (!this.head) return;

    let current = this.head;

    while (current && current.data !== data) {
      current = current.next;
    }

    if (!current) return;

    if (current.data === this.head.data) {
      this.head = current.next;
      this.head.prev = null;
    } else if (current.data === this.tail.data) {
      this.tail = current.prev;
      this.tail.next = null;
    } else {
      const pbd = current.prev;
      const nbd = current.next;
      pbd.next = nbd;
      nbd.prev = pbd;
    }
  }
}

const dll = new DoublyLinked();

dll.append(20);
dll.prepend(10);
dll.append(30);
dll.append(40);
dll.append(50);
dll.append(60);
dll.append(70);

// dll.printReverse();
dll.delete(10);
dll.printForward();

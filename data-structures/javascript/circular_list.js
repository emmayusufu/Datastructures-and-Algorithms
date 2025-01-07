class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularList {
  constructor() {
    this.head = null;
    this.current = null;
  }

  add(data) {
    const newNode = new Node(data);
    let current = this.head;
    if (!current) {
      this.head = newNode;
      this.head.next = this.head;
    } else {
      while (current.next !== this.head) {
        current = current.next;
      }
      newNode.next = this.head;
      current.next = newNode;
    }
  }

  next() {
    if (!this.current) this.current = this.head;
    else this.current = this.current.next;

    console.log(`Current Item: ${this.current.data}`);
  }

  prev() {
    if (!this.current) this.current = this.head;
    else {
      let temp = this.head;
      while (temp.next !== this.current) {
        temp = temp.next;
      }
      this.current = temp;
    }

    console.log(`Current Item: ${this.current.data}`);
  }
}

const list = new CircularList();
list.add("Item 1");
list.add("Item 2");
list.add("Item 3");

list.next(); // "Current Item: Item 1"
list.next(); // "Current Item: Item 2"
list.prev(); // "Current Item: Item 1"
list.next(); // "Current Item: Item 2"
list.next(); // "Current Item: Item 3"
list.next(); // "Current Item: Item 1" (wraps around)

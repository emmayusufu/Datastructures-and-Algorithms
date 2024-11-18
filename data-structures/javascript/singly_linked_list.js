class LinkedList {
  head;

  interAtEnd(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
    return;
  }

  deleteValue(value) {
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next.value === value) {
      current.next = current.next.next;
    }
  }

  logList() {
    let current = this.head;

    while (current) {
      console.log(current.value + "->");
      current = current.next;
    }
  }
}

class Node {
  value;
  next;

  constructor(value) {
    this.value = value;
  }
}

const ll = new LinkedList();

ll.interAtEnd(10);
ll.interAtEnd(20);
ll.interAtEnd(30);
ll.interAtEnd(40);
ll.interAtEnd(50);

ll.logList();

ll.deleteValue(20);

console.log("\n");

ll.logList();

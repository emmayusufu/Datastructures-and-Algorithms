class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }

    return this.items.shift();
  }

  peek() {
    return this.items.at(0);
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    this.items.length === 0;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue("hello");
queue.enqueue({ age: 5 });

console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.size());
console.log(queue.peek());

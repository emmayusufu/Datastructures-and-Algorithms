class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }

    return this.items.pop();
  }

  peek() {
    return this.items.at(-1);
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    this.items.length === 0;
  }
}

const stack = new Stack();
stack.push(1);
stack.push("hello");
stack.push({ age: 5 });

console.log(stack.peek());
console.log(stack.pop());
console.log(stack.size());

class Stack {
  constructor() {
    this.length = 0;
    this.stack = [];
  }

  push(element) {
    this.stack[this.length] = element;
    this.length++;
  }

  pop() {
    let pop = this.stack.pop();
    this.length--;
    return pop;
  }
  peek() {
    return this.stack[this.length - 1];
  }
}

let s1 = new Stack();

s1.push(1);
s1.push(2);
s1.push(3);
s1.push(4);
console.log("pop", s1.pop());

console.log(s1);
console.log("peek", s1.peek());

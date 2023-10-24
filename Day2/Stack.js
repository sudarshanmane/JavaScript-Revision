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

// let s1 = new Stack();

// s1.push(1);
// s1.push(2);
// s1.push(3);
// s1.push(4);
// console.log("pop", s1.pop());

// console.log(s1);
// console.log("peek", s1.peek());

// Inheritance

// Blue Print
class Mobile {
  constructor(brand, bt) {
    this.calling = true;
    this.brand = brand;
    this.batteryCapacity = bt;
  }

  print() {
    console.log(this);
  }
}

class SmartPhone extends Mobile {
  constructor(b, bt, screenSize, camera, bl) {
    super(b, bt);
    this.screenSize = screenSize;
    this.camera = camera;
    this.bluetooth = bl;
  }
  print() {
    console.log(this);
  }
}

let m1 = new Mobile("MI", 5000);
console.log(m1);

let sm1 = new SmartPhone("iPhone", 1700, 1500, 64, true);
console.log("sm1", sm1);

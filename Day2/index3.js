// function ConstFunc(n) {
//   this.name = n;
// }

// ConstFunc.prototype.print = function (params) {
//   console.log(this.name);
// };

// let p1 = new ConstFunc("person1");
// p1.print();

// es6

class Person {
  constructor(n) {
    this.name = n;
  }

  print = () => {
    console.log(this.name);
  };
}

const person = new Person("person");
console.log(person);
console.log(person.print());

// Functional programming

function name() {
  return "pizza";
}
let str = pizza();
// in this  the functions are the primary way for writing code

// Object oriented programming

let recepie = {
  items: ["butter", "paneer"],
  cook: function () {
    return `cook ${this.items[0]}`;
  },
};

recepie.cook();
// this programming is called as functional programming
// Nowdays to create an object is the best way is the OOPS concept

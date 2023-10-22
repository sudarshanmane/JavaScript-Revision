// when we print to a this it will print to the window object or global scope
// console.log(this);
// the  function is also defined in to the global scope so that is the why it will print to the window object
// function fun() {
// this will refer to its prent object
//console.log(this);
// }
// fun();
// let obj = {
//   team: "csk",
//   fun: function () {
//     console.log(this);
//   },
// };
// in case of the object this refers to the object it self
// obj.fun();
// so the this will refer to global object or window object or to the parent object
// overall this will always refers to the parent object
// this always refers to the parent object
// js reads to a function as a variable

function fun() {
  return {
    one: "one",
    two: "two",
  };
}
console.log(fun());

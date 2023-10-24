// Spread Operator
let arr = [1, 2, 3, 4, 5, 6, 7];
let arr1 = [1, 2, 3, 4, 5, 6, 7];

// console.log([...arr, ...arr1]);

// Rest Operator

function fun(a, c, ...b) {
  console.log(a);
  console.log(c);
  console.log(b);
}

fun("a", "b", "c", "d", "e", "f", "g");

console.log();

function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: null
console.log(foo(5, null)); // Output: null
console.log(foo(5, 5)); // Output: 10

//The unexpected behavior happens when one of the arguments is NaN
console.log(foo(NaN, 5)); // Output: NaN
console.log(foo(5, NaN)); // Output: NaN
function foo(a, b) {
  if (a === null || b === null || isNaN(a) || isNaN(b)) {
    return null; // Handle null and NaN values
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: null
console.log(foo(5, null)); // Output: null
console.log(foo(5, 5)); // Output: 10

//The unexpected behavior is resolved now
console.log(foo(NaN, 5)); // Output: null
console.log(foo(5, NaN)); // Output: null
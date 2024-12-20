# Unexpected Behavior with Loose Equality in JavaScript

This repository demonstrates a common JavaScript bug related to loose equality (`==`) and how to fix it using strict equality (`===`).

## Bug Description
The provided `foo` function demonstrates unexpected behavior when one of its arguments is `NaN`. Loose equality does not reliably handle comparisons involving `NaN`. Strict equality (`===`) is the preferred method as it checks both the value and type of the operands, preventing unintended results.

## Bug Solution
The solution uses strict equality (`===`) to handle null and NaN values correctly. This ensures that the function behaves as expected for all possible inputs. The solution also includes improved handling of NaN values to handle those scenarios correctly.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js` to see the original code with the bug.
3. Open `bugSolution.js` to see the corrected code using strict equality.
4. Run both files using a JavaScript interpreter (e.g., Node.js) to observe the differences in output.
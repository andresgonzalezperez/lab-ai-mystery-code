// ******* CASE 1: INFINITE LOOP *******

// function mystery1(arr) {
//   let i = 0;
//   while (i < arr.length) {
//     if (arr[i] % 2 === 0) {
//       return true;
//     }
//   }
//   return false;
// }

/* Description:
❌ Bug: i never increases
Inside the while loop, i is never incremented, so:
If arr[0] is even, it returns true immediately.
If arr[0] is odd, the loop becomes infinite and the function never ends.
So this code is broken. */

// Correct version:

function mystery1(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      return true;
    }
    i++;  // ← This was missing
  }
  return false;
}

// Example
console.log(mystery1([4, 7, 9])); // true



// ******* CASE 2: THE CRYPTIC FUNCTION *******

// function q(q){return q.split('').reverse().join('')==q}

/* Description: 
The function returns true if the string equals its reversed version (i.e., it’s a palindrome), otherwise false.
But it’s case-sensitive, compares punctuation/space as-is, and uses confusing naming and == instead of ===. 
Issues / Gotchas:
- Poor names: q for both function and parameter is not descriptive.
- Loose equality (==): use === for clarity and safety (here it behaves the same, but === is better practice).
- Case and non-letters: "Racecar" will be false because of capital R. "a man, a plan" will be false because of spaces and comma.
- Memory: .split().reverse().join() creates temporary arrays/strings — fine for short strings but less efficient for very long ones.
*/

// Simple and clearer version: 

function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return reversed === str;
}

// Examples
console.log(isPalindrome("level"));                     // true
console.log(isPalindrome("Level"));                     // false (case sensitive)



// ******* CASE 3: THE OVER-ENGINEERED MESS *******

// function complicatedCalc(a, b) {
//   let x = a;
//   let y = b;
//   for (let i = 0; i < b; i++) {
//     x = x + 1;
//     y = y - 1;
//   }
//   return x;
// }

/* Description: 
This seems to be a very roundabout way of adding two numbers.
Each loop adds 1 to x, and the loop runs b times. So the result is: x = a + b
The variable y is completely irrelevant — it changes but is never returned or used. */

// Correct version: 

function complicatedCalc(a, b) {
  return a + b;
}

// Examples 
console.log(complicatedCalc(1, 4))

/* A square of squares

You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.
Task

Given an integral number, determine if it's a square number:

    In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.
Examples

isSquare(-1) returns  false
isSquare(0) returns   true
isSquare(3) returns   false
isSquare(4) returns   true
isSquare(25) returns  true  
isSquare(26) returns  false

 */

function isSquare(n){
   return Math.sqrt(n) % 1 === 0;
}

var isSquare = function(n){
    return Number.isInteger(Math.sqrt(n));
}

const isSquare = n => Math.sqrt(n) % 1 === 0

var isSquare = function(n){

    if((Math.sqrt(n) % 1) == 0)
      return true;
    else
      return false;
}

//console.log(isSquare(-1)) //, false, "-1: Negative numbers cannot be square numbers");

//console.log(isSquare( 0)) //, true, "0 is a square number (0 * 0)");

//console.log(isSquare( 3)) //, false, "3 is not a square number");

//console.log(isSquare( 4)) //, true, "4 is a square number (2 * 2)");

//console.log(isSquare(25)) //, true, "25 is a square number (5 * 5)");

console.log(isSquare(26)) //, false, "26 is not a square number");
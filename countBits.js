/* Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
 */

/* function countBits(n) {
    const binaryStr = n.toString(2);

    return binaryStr.toString().split('').reduce((acc, val) => {
         if(val == 1) return acc += 1;
         else return acc += 0;
    }, 0);
}; */

function countBits(n){
    return n.toString(2).split('0').join('').length;
}

//console.log(countBits(0)) //, 0);
//console.log(countBits(4)) //, 1);
//console.log(countBits(7)) //, 3);
//console.log(countBits(9)) //, 2);
console.log(countBits(10)) //, 2);
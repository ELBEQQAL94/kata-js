// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^1 + 2^2 + 2^2 = 9.

// function squareSum(numbers){
//     let result =  numbers.map(num => num*num);
//     return result.reduce((acc, val) => acc + val, 0);
// };

// function squareSum(numbers){
//     return numbers.reduce(function(sum, n){
//       return (n*n) + sum;
//     }, 0)
// };

const squareSum = (numbers) => numbers.reduce((sum, n) => n*n + sum, 0);

console.log(squareSum([1,2])); //, 5
console.log(squareSum([0, 3, 4, 5])); //, 50

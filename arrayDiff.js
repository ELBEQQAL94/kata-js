// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// array_diff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:

// array_diff([1,2,2,2,3],[2]) == [1,3]

// function array_diff(a, b) {
//     let result = [];

//     if(a.length === 0) {
//         return a;
//     };

//     if(b.length === 0) {
//         return a;
//     };

//     a.map(num => {
//         if(b.indexOf(num) === -1) {
//             result.push(num)
//         }
//     });

//     return result;
    
// };

// const array_diff = (a, b) => a.filter(num => b.indexOf(num) === -1)

//console.log(array_diff([], [4,5]))
//, [], "a was [], b was [4,5]");

 console.log(array_diff([3,4], [3]))
// [4], "a was [3,4], b was [3]");

console.log(array_diff([1,18,2,5,-9,6,10,-3],[1,-3,2]))
// [18, 5, -9, 6, 10]

//console.log(array_diff([1,8,2], []))
//, [1,8,2], "a was [1,8,2], b was []");
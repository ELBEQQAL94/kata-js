/* Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
 */

function finTheOddInt(A){
  let odd_number;
  let count_each_num = A.reduce((acc, curr) => {
    if (typeof acc[curr] == 'undefined') {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }
  
    return acc;
  }, {});
  
  for(count in count_each_num) {
    count_each_num[count] % 2 
    ?
    odd_number = Number(count)
    :
    ''
  }
  return odd_number;
}

/* function findOdd(arr) {
  return arr.find(item => arr.filter(el => el == item).length % 2)
} */

function findOdd(arr){
  return arr.find(number => arr.filter(num => num == number).length % 2)
}

console.log(finTheOddInt([
  20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5
]));

// check odd number num % 2 || true;

// 20 ==> 2
// 1  ==> 2
// -1 ==> 2
// 2  ==> 2
// -2 ==> 2
// 3  ==> 2
// 5  ==> 3
// 4  ==> 2

// result is 5
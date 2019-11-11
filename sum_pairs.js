/* Sum of Pairs

Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * entire pair is earlier, and therefore is the correct answer
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * entire pair is earlier, and therefore is the correct answer
== [3, 7]

Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out. */

/* function sum_pairs(ints, s){

    let pairs = [];

    ints.reduce((acc,val) => {
        if(acc + val === s){
            pairs.push(acc, val);
        }
    })

     for(let i = 0; i < ints.length; i++){
        if(ints[i] + ints[i + 1] === s && i != ints.length - 1){
            pairs.push(ints[i], ints[i + 1]);
        } else {
            for(j = i + 1; j < ints.length; j++){
                if(ints[i] + ints[j] === s && j != ints.length){
                    pairs.push(ints[i], ints[j])
                }
            }
        }
   
    } 

    if(pairs.length === 0) return undefined;

    //if(pairs.length > 2) return pairs.slice(0,2);

    return pairs;
}
 */

/* var sum_pairs = function(numbers, sum) {
  // a place to store the pairs we encounter
  const pairs = [];
  // for each number in the array
  numbers.forEach((leftNumber, leftIndex) => {
    // iterate over the array
    for (
      let rightIndex = leftIndex + 1;
      rightIndex < numbers.length;
      rightIndex++
    ) {
      const rightNumber = numbers[rightIndex];
      // add the two values
      // if they are equal to sum
      if (leftNumber + rightNumber == sum) {
        // store the numbers and the right index
        pairs.push({
          pair: [leftNumber, rightNumber],
          rightIndex
        });
      }
    }
  });

  if (pairs.length > 0) {
    let earliestPair = pairs[0];
    for (let i = 1; i < pairs.length; i++) {
      if (earliestPair.rightIndex > pairs[i].rightIndex) {
        earliestPair = pairs[i];
      }
    }
    // return the earliest pair (lowest second index)
    return earliestPair.pair;
  }
  return undefined;
}; */

/* var sum_pairs = function(numbers, sum){
    // a place to keep track of the numbers we have seen
    const seenNumbers = {};
    // iterate over the numbers
    // [11, 3, 7, 5], 10
    for (let i = 0; i < numbers.length; i++) {
        console.log(seenNumbers);
      const currentNumber = numbers[i];
      // subtract current number from sum to get the number we need
      const need = sum - currentNumber;
      // check to see if we've seen the number we need before
      if (seenNumbers[need]) {
        // if we have return the pair
        return [need, currentNumber];
      } else {
        // if not, set number as seen
        seenNumbers[currentNumber] = true;
         
      }
    }
    // return undefined
  } */

/* var sum_pairs=function(ints, s){
    var seen = {}
    for (var i = 0; i < ints.length; ++i) {
      if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
      seen[ints[i]] = true
    }
} */

/* var sum_pairs = function(ints, s) {
    set = new Set();
    
    for (let i of ints) {
      if (set.has(s - i)) {
        return [ s - i, i ];
      }
      
      set.add(i);
    }
} */

// console.log(sum_pairs([11, 3, 7, 5],10)) // [3,7]

// console.log(sum_pairs([4,-2,3,3,4],8)) // [4,4]

//console.log(sum_pairs([1,2,3,4,1,0],2)) // [1,1]

//console.log(sum_pairs([10, 5, 2, 3, 7, 5], 10)); // [3,7]

// console.log(sum_pairs([1,2,3,4,1,0],2)) // [1,1]

// console.log(sum_pairs([10,5,2,3,7,5],10)) // [3,7]

//console.log(sum_pairs([1,4,8,7,3,15],8)) // [1,7]

//console.log(sum_pairs([1, 4, 8, 7, 3, 15], 8))
//"" == [1, 7]+"", "Basic: ["+l1+"] should return [1, 7] for sum = 8");

//console.log(sum_pairs(l2, -6))
//"" == [0, -6]+"", "Negatives: ["+l2+"] should return [0, -6] for sum = -6");

//console.log(sum_pairs(l3, -7))
//== undefined, "No Match: ["+l3+"] should return undefined for sum = -7");

//console.log(sum_pairs(l4, 2))
//"" == [1, 1]+"", "First Match From Left: ["+l4+"] should return [1, 1] for sum = 2 ");

//console.log(sum_pairs(l5, 10))
//"" == [3, 7]+"", "First Match From Left REDUX!: ["+l5+"] should return [3, 7] for sum = 10 ");

//console.log(sum_pairs(l6, 8))
//"" == [4, 4]+"", "Duplicates: ["+l6+"] should return [4, 4] for sum = 8");

//console.log(sum_pairs(l7, 0))
//"" == [0, 0]+"", "Zeroes: ["+l7+"] should return [0, 0] for sum = 0");

//console.log(sum_pairs(l8, 10))
//"" == [13, -3]+"", "Subtraction: ["+l8+"] should return [13, -3] for sum = 10");

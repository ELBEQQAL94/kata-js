/*
https://www.codewars.com/kata/search/my-languages?q=&r%5B%5D=-5&beta=false
*/

/* function rotate(arr) {
	copy = [];

	rows = arr.length;
	for(i = 0; i < rows; i++) {
		cols = arr[i].length;
		for(j = 0; j < cols; j++) {
			if(copy[cols - 1 - j] === undefined) copy[cols - 1 - j] = [];
			copy[cols - 1 - j][i] = arr[i][j];
		}
	}

	return copy;
} */


/* function snail(array){

    result = [];

    do {
        result = res.concat(array.shift());
        array = rotate(array);
    } while(array.length);
    
    return result;

} */

/* const snail = array => {

    let result;

    while (array.length) {

      // Steal the first row.
      result = (result ? result.concat(array.shift()) : array.shift());

      // Steal the right items.
      for (let i = 0; i < array.length; i++) {
        result.push(array[i].pop());
      }

      // Steal the bottom row.
      result = result.concat((array.pop() || []).reverse());

      // Steal the left items.
      for (let i = array.length - 1; i >= 0; i--) {
        result.push(array[i].shift());
      }

    }

    return result;
} */

function snail(array) {

    let vector = [];

    while (array.length) {

      // Steal first row
      vector.push(...array.shift());

      // Steal last item from each row in the array
      array.map(row => vector.push(row.pop()));

      // reverse the rest elemnt in the array
      array.reverse().map(row => row.reverse());

    }

    return vector;
}

//console.log(snail([[]])) //, []);

//console.log(snail([[1]])) //, [1]);

console.log(snail([
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
])) //, [1, 2, 3, 6, 9, 8, 7, 4, 5]);


/* console.log(snail([
    [1, 2, 3, 4, 5], 
    [6, 7, 8, 9, 10], 
    [11, 12, 13, 14, 15], 
    [16, 17, 18, 19, 20], 
    [21, 22, 23, 24, 25]
])) */
    //, [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);

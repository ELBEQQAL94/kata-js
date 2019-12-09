/* Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
Example:

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!
 */

/* function createPhoneNumber(numbers){
    let cleaned = ('' + numbers).replace(/\D/g, '')

    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)

  return `(${match[1]}) ${match[2]}-${match[3]}`;
} */

/* function createPhoneNumber(numbers){
    numbers = numbers.join('');
    return '(' + numbers.substring(0, 3) + ') ' 
        + numbers.substring(3, 6) 
        + '-' 
        + numbers.substring(6);
} */

function createPhoneNumber(numbers){
    let format = '(xxx) xxx-xxxx';

    for(let i = 0; i < numbers.length; i++){
        format = format.replace('x', numbers[i]);
    }

    return format;
}

const test_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//console.log(createPhoneNumber(test_1)) //, "(123) 456-7890";

const test_2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
//console.log(createPhoneNumber(test_2)) //, "(111) 111-1111");

const test_3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(createPhoneNumber(test_3)) //, "(123) 456-7890");
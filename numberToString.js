/* We need a function that can transform a number into a string.

What ways of achieving this do you know?
Examples:

numberToString(123); // returns '123';`   
numberToString(999); // returns '999';` */

function numberToString(num){
  return num.toString();
}

function numberToString(num){
    return String(num);
}

function numberToString(num){
    return `${num};`
}



console.log(numberToString(67), '67');
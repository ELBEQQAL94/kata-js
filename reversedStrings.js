/* Complete the solution so that it reverses the string value passed into it.

solution('world'); // returns 'dlrow' */

function reversedString(str){
   let reversedString = '';

   for(let i = str.length - 1; i >= 0; i--){
       reversedString += str[i]
   }

   return reversedString;
}

function reversedString(str){
    return str.split('').reverse().join('');  
}

const solution = str => str.split('').reverse().join('');

const reversedString = s => [...s].reverse().join('')

console.log(reversedString('world')) // == 'dlrow')
/* It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters. */

/* function removeChar(str) {
    let result = '';

     for(let i = 0; i < str.length; i++){
        if(i !== 0 && i !== str.length -1){
            result += str[i];
        }
     }

     return result;
} */

// SOLVE IT WITH String.slice()
/* function removeChar(str) {
    return str.slice(1, -1);
} */

// SOLVE IT USING REGEX
/* 
const removeChar = (str) => str.replace(/^.|.$/g, '');
 */

console.log(removeChar('eloquent')) //, 'loquen');
//console.log(removeChar('country')) //, 'ountr');
//console.log(removeChar('person')) //, 'erso');
//console.log(removeChar('place')) //, 'lac');
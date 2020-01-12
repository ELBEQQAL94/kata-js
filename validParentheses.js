/* 
Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
Examples

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

Constraints

0 <= input.length <= 100

*/

function validParentheses(parens) {
    let stack = [];
    let map = {
        '(': ')'
    };

    for (let i = 0; i < parens.length; i++) {

        // If character is an opening brace add it to a stack
        if (parens[i] === '(') {
            stack.push(parens[i]);
        }
        //  If that character is a closing brace, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
        else {
            let last = stack.pop();

            //If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the map, then return false
            if (parens[i] !== map[last]) {return false};
        }
    }
    // By the completion of the for loop after checking all the brackets of the str, at the end, if the stack is not empty then fail
        if (stack.length !== 0) {return false};

    return true;
}

function validParentheses(string){
    var tokenizer = /[()]/g, // ignores characters in between; parentheses are
        count = 0,           // pretty useless if they're not grouping *something*
        token;
    while(token = tokenizer.exec(string), token !== null){
       if(token == "(") {
          count++;
       } else if(token == ")") {
          count--;
          if(count < 0) {
             return false;
          }
       }
    }
    return count == 0;
}

function validParentheses(parens){
    var n = 0;
    for (var i = 0; i < parens.length; i++) {
      if (parens[i] == '(') n++;
      if (parens[i] == ')') n--;
      if (n < 0) return false;
    }
    
    return n == 0;
  }

function validParentheses(parens){
    var re = /\(\)/;
    while (re.test(parens)) parens = parens.replace(re, "");
    return !parens;
}

//console.log(validParentheses( "()" )); //true

//console.log(validParentheses( "())" )); // false

//console.log(validParentheses( "(())((()())())" )); // true

//console.log(validParentheses( "()()((()" )); // false

//console.log(validParentheses( "()()" )); // true

//console.log(validParentheses( "(())" )); // true

//console.log(validParentheses( ")" )); // false

//console.log(validParentheses( ")" )); // false

//console.log(validParentheses( "())" )); // false

//console.log(validParentheses( "((((()))))" )); // true

//console.log(validParentheses( "()))" )); // false

//console.log(validParentheses( "()()()())" )); // false

//console.log(validParentheses( "(()()()())(())" )); // true

//console.log(validParentheses( "((((((((" )); // false

//console.log(validParentheses( "(())((()((()))))" )); // true

//console.log(validParentheses( "())(" )); // true

//console.log(validParentheses( ")()()()(" )); // false

//console.log(validParentheses( "(()()))(" )); // false

//console.log(validParentheses( ")()(" )); // false

//console.log(validParentheses( "())(()" )); // false

//console.log(validParentheses( "()(())()()()()(())()()()(()(" )); // false

//console.log(validParentheses( "(())(())()()()()()()()()()()(())()" )); // false

//console.log(validParentheses( "()()(())()()()()()()()()()" )); // true

//console.log(validParentheses( "()()()()()((()))()()()()()()()()()" )); // true

//console.log(validParentheses( "()()()()()()(())()()()()()()()()()()()((" )); // false

//console.log(validParentheses( "()()()" )); // false

//console.log(validParentheses( "()()()()()()()()" )); // true

//console.log(validParentheses( "(())()()()(()()())()()" )); // true

//console.log(validParentheses( "(())()" )); // true

//console.log(validParentheses( "(())()()()()()()()()()()()()()()()()()" )); // true

//console.log(validParentheses( "(())()()()()()()()()()()()()()()()()()" )); // true
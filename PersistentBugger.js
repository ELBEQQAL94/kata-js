/* Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example:

 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number */
// THIS IS MY OWN SOLUTION LOL
 function persistence(num) {
    num = num.toString().split('');
    let times = 1;
    let count = 0;

    while(num.length !== 1){

        for(let i = 0; i < num.length; i++){
            times *= +num[i]; 
        }

        num = times.toString().split('');
        count++;
        times = 1;
    } 

    return count; 
 }

 /* function persistence(num) {
    var times = 0;
    
    num = num.toString();
    
    while (num.length > 1) {
      times++;
      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }
    
    return times;
 } */


 /* function persistence(num) {
    var i = 0;
    for(i;num.toString().length>1;i++){
      num = num.toString().split('').reduce(function(x,y){return x*y});
    }
    return i;
  } */

//console.log(persistence(39)) //,3);
//console.log(persistence(4)) //,0);
//console.log(persistence(25)) //,2);
console.log(persistence(999)) //,4);
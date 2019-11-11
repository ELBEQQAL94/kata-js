/* 
The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.
Examples:

tickets([25, 25, 50]) // => YES 
tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the ri 
*/

function tickets(peopleInLine){

    let current_money = 0;
    let can = '';

    for(let i = 0; i < peopleInLine.length; i++){
        if(peopleInLine[i] === 25){
            current_money += peopleInLine[i];
            can = "YES"
        } else {
            if(current_money - (peopleInLine[i] - 25) <= 0) {
                can = "NO";
            } else {
                if(peopleInLine[i] > 25){
                    current_money += peopleInLine[i] - 25;
                }
                can = "YES"
            } 
        }
        
    }

    return can;

}

// console.log(tickets([25, 25, 50, 50])) //, "YES"
console.log(tickets([25,50,25,100,25,25,25,100,25,25,25,100,25,25,25,100,25,50,50,50])) //, "YES"
console.log(tickets([25,25,25,100,25,25,50,100,25,25,25,100,25,25,25,100,100,50 ])) //, "NO"
// console.log(tickets([25, 100])) //, "NO"

// 25
// 50
// 75
// 75 - 75 = 0

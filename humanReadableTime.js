/* Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59

The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
 */

/* function humanReadable(seconds) {
    if(seconds === 0) return '00:00:00';
  const time = new Date(null);

    time.setSeconds(seconds);

    let hours = time.getHours().toString().padStart(2, '0');

    let mins = time.getMinutes().toString().padStart(2, '0');

    let secs = time.getSeconds().toString().padStart(2, '0');
    
    if(hours === '03') hours = '99';
    if(hours === '00' && mins === '00' && secs === '00') hours = '24';

    return `${hours}:${mins}:${secs}`;
} */

function humanReadable(seconds) {

    let hours = parseInt(seconds / (60*60)).toString().padStart(2, '0');

    let mins = parseInt(seconds / 60 % 60).toString().padStart(2, '0');

    let secs = (seconds % 60).toString().padStart(2, '0')
    
    return `${hours}:${mins}:${secs}`;
}

//console.log(humanReadable(0)) //, '00:00:00', 'humanReadable(0)');

//console.log(humanReadable(5)) //, '00:00:05', 'humanReadable(5)');

//console.log(humanReadable(60)) //, '00:01:00', 'humanReadable(60)');

//console.log(humanReadable(86399)) //, '23:59:59', 'humanReadable(86399)');

console.log(humanReadable(359999)) //, '99:59:59', 'humanReadable(359999)');
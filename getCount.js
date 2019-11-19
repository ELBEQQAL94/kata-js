/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.
 */

function getCount(str){
  var vowelsCount = 0;

  //  a, e, i, o, u

  const vowels = {
      a: 'a',
      e: 'e',
      i: 'i',
      o: 'o',
      u: 'u'
  };

  for(let i = 0; i < str.length; i++){
      if(vowels[str[i]]) vowelsCount++;
  }
  
  return vowelsCount;
}

function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
}

function getCount(str) {
    return str
    .split('')
    .filter(c => "aeiouAEIOU".includes(c))
    .length;
}



console.log(getCount("abracadabra")) //, 5)

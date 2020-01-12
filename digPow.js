// The Math.pow() function returns
// the base to the exponent power,
// that is, baseexponent.

function digPow(n, p) {
  
  let arr = n.toString().split("");

  let k = p;

  let sum = arr.reduce((acc, val) => Math.pow(acc, p) + Math.pow(val, p + 1));

  if (sum === n) return 1;

  // probleme is here
  else if (sum > n) {
    while (n*k !== sum) {
      k++;
    }
    return k;
  } else {
    return -1;
  }
}

//console.log(digPow(89, 1)); //1
//console.log(digPow(92, 1)) // -1
//console.log(digPow(46288, 3)) // 51

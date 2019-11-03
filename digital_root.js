/* function digital_root(n) {
  let sum = "";

  if (n.toString().length === 1) {
    // false
    return n;
  }

  if (n.toString().length > 1) {
    // true
    sum = n
      .toString()
      .split("")
      .reduce((acc, val) => {
        return parseInt(acc) + parseInt(val);
      });
    while (sum.toString().length > 1) {
      sum = sum
        .toString()
        .split("")
        .reduce((acc, val) => {
          return parseInt(acc) + parseInt(val);
        });
    }
  }

  return sum;
}
 */

/* function digital_root(n) {
    return (n - 1) % 9 + 1;
  } */

  

// console.log( digital_root(16)) // 7
console.log(digital_root(456)); // 6

/* Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true] */

function countSheeps(arrayOfSheep) {
  let count = 0;

  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] == true) count++;
  }

  if (count == 0) return undefined;

  return count;
}

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.reduce((result, current) => {
    if (current) result++;
    return result;
  }, 0);
}

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.reduce(
    (result, current) => result + (current === true ? 1 : 0),
    0
  );
}

var array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true
];

console.log(countSheeps(array1));

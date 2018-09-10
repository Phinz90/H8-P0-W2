function xo (str) {

if (str.split('o').length !== str.split('x').length) {
  return false;
} else {
  return true;
}
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true

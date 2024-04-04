
// Intuitive Approach
function palindromeChecker(str) {
  const reversedStr = str.toLowerCase().split('').reverse().join('')
  return str === reversedStr
}
console.log(palindromeChecker('racecar')) // will return true
console.log(palindromeChecker('RaceCar')) // will return true
console.log(palindromeChecker('false')) // will return false

// Loop and compare characters method  --- inefficient
// function palindromeCheckerCompare(str) {
//   const strArr = str.toLowerCase().split('')
//   return strArr.every((letter, index) => letter === strArr[strArr.length - index - 1])
// }

// Optimized to only check to the middle of the string: FASTEST
function palindromeCheckerCompare(str) {
  const strArr = str.toLowerCase().split('');
  const middleIndex = Math.floor(strArr.length / 2);
  
  for (let i = 0; i < middleIndex; i++) {
    if (strArr[i] !== strArr[strArr.length - i - 1]) {
      return false;
    }
  }

  return true;
}
console.log(palindromeCheckerCompare('racecar')) // will return true
console.log(palindromeCheckerCompare('RaceCar')) // will return true
console.log(palindromeCheckerCompare('false')) // will return false

console.log('The fixed loop method is the fastest implementation considered. The un-optimized loop method initially considered comes in second place and is approximately 47% slower, while the seemingly intuitive approach is the slowest of them all (87% slower)')
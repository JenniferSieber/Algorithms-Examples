console.log(`Given an integer, return an integer that has the reverse ordering of that which was received.`)

// Convert the Integer to a string
function reverseInteger(int) {
  let intStr = int.toString()
  let intReverse = [...intStr].reduce((acc, char) => char + acc, '')
  let reversedNum = parseInt(intReverse)
  return (reversedNum * Math.sign(int))
}
console.log(reverseInteger(-123))

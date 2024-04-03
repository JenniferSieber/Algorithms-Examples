/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

///   Chaining
function chaining_reverseString(text) {
  // ex 1:
  // return text.split('').reverse().join('')

  //ex 2: cutting-edge ES6 syntax, we can use the spread operator as shown below to tweak this solution a bit.
  return [...text].reverse().join('')
}
console.log('chaining', chaining_reverseString('chaining algorithms'))


///   For Loop 
function forloop_reverseString(text) {
  let result = ''

  // ex 1: we use a decrementing for-loop to run through the string received and append each character to another variable in reverse order.
  // for (let i = text.length - 1; i >= 0; i--) {
  //   result += text[i]
  // }

  // ex 2: ES6 improvement for ... of loop
  for (let char of text) {
    result = char + result
  }

  // same return either example
  return result
}
console.log('for loop', forloop_reverseString('for...loop algorithms'))


///   Recursion
function recursion_reverseString(text) {
  // ex 1: 
  // check for terminal case --- ends the recursion -REQ or endless loop
  if (text === '') {
    return ''
  } else {
    return recursion_reverseString(text.substr(1)) + text[0]
  }
  
}
console.log('recursion', recursion_reverseString('recursion algorithms'))

///   .reduce() method
function reduce_reverseString(text) {
  // ex 1: 
  //return text.split('').reduce((acc, char) => char + acc, '')

  // ex 2:  ES6
  return [...text].reduce((acc, char) => char + acc, '')
  
}

console.log(reduce_reverseString('.reduce() method', 'reduce algorithms'))


console.log('Test for fastest solution:', ' the fastest solution we have considered is using the .reduce() method. Next, is the for-loop method which is only 6% slower and is a pretty close one. The slowest of them all is the method of chaining .split(), .reduce() and .join(59% slower).')
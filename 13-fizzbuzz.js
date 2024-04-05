// For Loop Approach
function fizzBuzz(n) {
  for (let i = 0; i < n; i++) {
    if (i % 15 === 0) {
      console.log('FizzBuzz')
    } else if (i % 3 === 0) {
      console.log('Fizz')
    } else if (i % 5 === 0) {
      console.log('Buzz')
    } else {
      console.log(i)
    }
  }
}
console.log(fizzBuzz(16))

// CLEANER AND SMALLER
function fizzBuzzSmall(n) {
  for (let i = 0; i < n;)
      console.log((++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i)
}
console.log(fizzBuzzSmall(16))
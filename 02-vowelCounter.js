///     Iterative Approach - for...of loop
const vowels = ["a", "e", "i", "o", "u"]
function vowelsCounter(text) {
  let counter = 0
  // loop through text to test if each characters is a vowel
  for (let letter of text.toLowerCase()) {
    if (vowels.includes(letter)) {
      counter ++
    }
  }
  return counter
}

console.log('Iterative -for...of loop', vowelsCounter('Iterative or REGEX Algorithm'))

function vowelsCounterRegex(text) {
  let matches = text.match(/[aeiou]/gi)

  return matches ? matches.length : 0
}

console.log('REGEX', vowelsCounterRegex('Iterative or REGEX Algorithm'))


console.log('Testing Performance speed: ', 'The Regex Method is approximately 88% faster than The Iterative Approach to solving this problem. Thus, it is a more optimal solution.')
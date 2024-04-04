console.log('Algorithmic Thinking: Looping with .forEach() or .map() with .splice()  or .replace()  ')

// USING A .forEach() with slice
function capSentence(text) {
  let wordsArray = text.toLowerCase().split(' ')
  let capsArray = []

  wordsArray.forEach(word => {
    capsArray.push(word[0].toUpperCase() + word.slice(1))
  })

  return wordsArray.join(' ')
}
console.log('.forEach() loop', capSentence('capitalize this sentence.'))


//      Using .map() with .slice()
function capSentenceMapSlice(text) {
  let wordsArray = text.toLowerCase().split(' ')
  let capsArray = wordsArray.map(word => {
    return word[0].toUpperCase() + word.slice(1)
  })

  return capsArray.join(' ')
}
console.log('.map()  with .slice()', capSentenceMapSlice('capitalize this sentence.'))


//      Using .map() with .replace()
function capSentenceMapReplace(text) {
  let wordsArray = text.toLowerCase().split(' ')
  let capsArray = wordsArray.map(word => {
    return word.replace(word[0], word[0].toUpperCase())
  })

  return capsArray.join(' ')
}
console.log('.map()  with .replace()', capSentenceMapReplace('capitalize this sentence.'))


//      Using .map() with .replace() Simplifed with functional expression
const capSentenceMapReplace_1 = (text) => text.toLowerCase().split(' ').map(word => word.replace(word[0], word[0].toUpperCase())).join(' ');

console.log('Simplified function expression with .map()  with .replace()', capSentenceMapReplace_1('capitalize this sentence.'))



console.log('test reveals that using the .map() and .slice() method is the fastest. Next, is .forEach() which is approximately 15% slower. And last, is the .map() and .replace() which is 29% slower.')
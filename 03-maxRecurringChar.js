console.log('Algorithmic Thinking: Character Mapping  ', 'We need to somehow keep track of every character in the string as well as the number of times it exists. This we would describe as character mapping. Once we successfully create such a map, we can easily determine which character has the highest occurence.')


//      For...In Interation method
function maxRecurringChar(text) {
  let charMap = {}
  let maxCharValue = 0
  let maxChar = ''

  for (let char of text) {
    if (charMap.hasOwnProperty(char)) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  }

  for (let char in charMap) {
    if (charMap[char] > maxCharValue) {
      maxCharValue = charMap[char]
      maxChar = char
    }
  }
  console.log(charMap)
  return maxChar
}
console.log('Iterative-for...in loop', maxRecurringChar('Max Recurring Characters'))

///     forming arrays from the character map method
function maxRecurringCharArrays(text) {
  let charMap = {}
  let charArray = []
  let valuesArray = []
  let maxCharValue = 0

  for (let char of text) {
    if (charMap.hasOwnProperty(char)) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  }
  charArray = Object.keys(charMap)
  valuesArray = Object.values(charMap)
  maxCharValue = Math.max(...valuesArray)

  console.log(charMap)
  return charArray[valuesArray.indexOf(maxCharValue)]
}
console.log('forming arrays from the character map method', maxRecurringCharArrays('Max Recurring Characters'))



console.log('The For…In iteration is the fastest. With the Arrays method trailing behind by approximately 30%.')

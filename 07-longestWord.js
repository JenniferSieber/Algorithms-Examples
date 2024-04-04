console.log('Challenge: find longest word in sentence with three different approaches: ', 'For-Loop, .reduce(), .sort()')


// For Loop - this for loop will only return the first word that meets criteria of longest word. IE: Development and Algorithmic same length---only returns Development
function longestWordForLoop(str) {
  let strArr = str.split(' ')
  let maxLength = 0
  let result = ''

  for (let i = 0; i < strArr.length; i++) {
    let strLen = strArr[i].length;
    console.log(strArr[i], strLen)
    if (strLen > maxLength) {
      maxLength = strLen
      result = strArr[i]
    }
  }
  return result
}
console.log('For Loop',longestWordForLoop('Top Shelf Web Development includes Algorithm ic, Knowledge and Practice') )

//  Reduce Method: - this for loop will only return the first word that meets criteria of longest word. IE: Development and Algorithmic same length---only returns Development
// function longestWordReduceMethod(str) {
//   const result = str.split(' ').reduce((maxLenWord, currentWord) => {
//     if (currentWord.length > maxLenWord.length) {
//       return currentWord
//     } else {
//       return maxLenWord
//     }
//   }, "")
//   return result
// }

// Optimized syntax to shorten code
function longestWordReduceMethod(str) {
  return str.split(' ').reduce((maxLenWord, currentWord) => {
    return (currentWord.length > maxLenWord.length) ? currentWord : maxLenWord
  }, "")
}
console.log('Reduce Method',longestWordReduceMethod('Top Shelf Web Development includes Algorithmic, Knowledge and Practice') )
console.log('Reduce Method',longestWordReduceMethod('Top Shelf Web') )


// .sort() Method --- returns first longest word in string---SLOWEST
function longestWordSortMethod(str) {
  const sortedArr = str.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)
  return sortedArr[0]
}
console.log('Reduce Method',longestWordSortMethod('Top Shelf Web Development includes Algorithmic Practice') )


console.log('Test Results:  for-Loop and **.reduce()** implementations perform best and are the fastest with really close performance values. The **.sort()** method on the other hand, is 83% slower than both methods.')

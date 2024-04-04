console.log('The hamming distance between two strings of equal length is the number of positions at which these strings vary. In more technical terms, it is a measure of the minimum number of changes required to turn one string into another.', 'https://en.wikipedia.org/wiki/Hamming_distance')

// The Challenge:
// Given two strings of equal length, calculate and return the the hamming distance. E.g

function hammingDistance(s1, s2) {
  // loop and compare s1 and s2 at each index and increment count by one with every change
  let count = 0
  if (s1.length === s2.length) {
    for (let i = 0; i < s1.length; i++) {
      if (s1[i].toLowerCase() != s2[i].toLowerCase()) {
        count++
      }
    }
    return count
  } else {
    throw new Error('Strings are not equal lengths')
  }
}

console.log(hammingDistance('rover', 'river')) // should return 1
console.log(hammingDistance('rovers', 'river')) // error
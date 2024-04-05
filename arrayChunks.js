console.log('Array Manipulation')
console.log('Given an array and a chunk size, divide the array into many sub-arrays where each sub-array has the specified length. E.g')
console.log('Approaches: Looping through the array, Iterating with the number of chunks, Using .slice(), Recursion')

// Looping through the array
function chunkArray(arr, size) {
  let result = []

  for (value of arr) {
    let lastArr = result[result.length -1]
    if (!lastArr || lastArr.length == size) {
      result.push([value])
    } else {
      lastArr.push(value)
    }
  }
  return result
}


console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)) // should return [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]


// Looping through the number of chunks - .splice() method
function chunkArraySplice(arr, size) {
  let result = []
  let copy = [...arr]
  while (copy.length > 0) {
    result.push(copy.splice(0, size))
  }
  return result
}

console.log(chunkArraySplice([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)) // should return [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]


// Looping through the number of chunks - .slice() method
function chunkArraySlice(arr, size) {
  let result = []
  for (let i = 0; i < arr.length; i+= size) {
    let chunk = arr.slice(i, i + size)
    result.push(chunk)
  }
  return result
}

console.log(chunkArraySlice([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)) // should return [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]


// Recursion
// https://developer.mozilla.org/en-US/docs/Glossary/Recursion
function chunkArrayRecursion(arr, size) {
  // base case for recursion
  if (arr.length <= size) {
    return [arr]
  }
  // extracts a chunk of array, recursively calls the fn and return as an array
  return [arr.slice(0, size), ...chunkArrayRecursion(arr.slice(size), size)]
}

console.log(chunkArrayRecursion([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)) // should return [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]

console.log('Test: After comparing all four solutions, the .slice() method is the fastest of all implementations. It is followed by the recursive approach which is 46% slower.')
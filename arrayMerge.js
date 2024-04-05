console.log('Given two or more arrays (infinite amount possible), write a function that combines their elements into one array without any repetition')

// get all arrays with let arrays = Array.from(arguments)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
// get infinite amount of arrays with ES6 rest parameter syntax  function mergeArrays(...arrays) { // code here }
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
console.log('Approaches: Sets, .filter(), .reduce()')

// Sets
function mergeArraysSets(...arrays) {
  let jointArr = []
  arrays.forEach(arr => {
    jointArr = [...jointArr, ...arr]
  })
  // using the Array.from() method to convert the set which is an iterable object to an array
  return Array.from(new Set([...jointArr]))
}
console.log(mergeArraysSets([1,2,3,3,3], [1,4,5,2])) // should return [1,2,3,4,5]


// Filter
function mergeArraysFilter(...arrays) {
  let jointArr = []
  arrays.forEach(arr => {
    jointArr = [...jointArr, ...arr]
  })
  const unique = jointArr.reduce((newArr, item) => {
    if (newArr.includes(item)) {
      return newArr
    } else {
      return [...newArr, item]
    }
  }, [])
  return unique
}
console.log(mergeArraysFilter([1,2,3,3,3], [1,4,5,2])) // should return [1,2,3,4,5]


// Reduce
function mergeArraysReduce(...arrays) {
  let jointArr = []
  arrays.forEach(arr => {
    jointArr = [...jointArr, ...arr]
  })
  return jointArr.filter((item, index) => jointArr.indexOf(item) === index)
}
console.log(mergeArraysReduce([1,2,3,3,3], [1,4,5,2])) // should return [1,2,3,4,5]

console.log(`Test:  using the .filter() method is the fastest approach of all three. Next is using a set, which is 33% slower.`)
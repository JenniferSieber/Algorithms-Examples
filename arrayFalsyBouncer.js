console.log(`Given an array, remove all falsy values from the array and return an array of only truthy values. E.g`, 'Approaches: for...of Loop, .filter()')

// for...of Loop
function falsyBouncer(arr) {
  let result = []
  for (value of arr) {
    if (value) {
      result.push(value)
    }
  }
  return result
}
// OR .forEach()
// function falsyBouncer(arr) {
//   let result = []
//   arr.forEach(el => {
//     if (el) {
//       result.push(el)
//     }
//   })
//   return result
// }

console.log(falsyBouncer([1, 0, null, '', 5]))  // should return [1,5]

// Filter
// function falsyBouncerFilter(arr) {
//   return arr.filter(val => {
//     return Boolean(val)
//   })
// }

// optimized Filter with functional expression syntax:
const falsyBouncerFilter = arr => arr.filter(val => Boolean(val));

console.log(falsyBouncerFilter([1, 0, null, '', 5]))  // should return [1,5]

console.log(`Testing:  the for…of loop is the faster approach to solving this problem. However, the **.filter()** method is only approximately 5% slower.`)
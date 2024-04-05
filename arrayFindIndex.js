console.log(`Return the lowest index at which a value (second argument) i.e **num** should be inserted into an array (first argument) i.e **arr** once it has been sorted. The returned value should be a number.`)
console.log('Four Approaches: for-loop to find the immediate larger values position, for-loop to determine the number of the smaller values, using while loop to count the smaller values, Finding Index directly with ES6 spread operator, sort and indexOf methods')

// #1: for-loop to find the immediate larger values position
function findIndexOne(arr, num) {
  arr.sort((a,b) => a - b)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i
    }
  }
  return arr.length
}
console.log(findIndexOne([1,2,3,4], 1.5))
console.log(findIndexOne([1,2,3,4], 7.5))

// #2: for-loop to determine the number of the smaller values
function findIndexTwo(arr, num) {
  let counter = 0
  for (let i = 0; i < arr.length; i++) {
    if (num > arr[i]) {
      counter++
    }
  }
  return counter
}
console.log(findIndexTwo([1,2,3,4], 1.5))
console.log(findIndexTwo([1,2,3,4], 7.5))

// #3: while loop to count the smaller values
function findIndexThree(arr, num) {
  arr.sort((a,b) => a - b)
  let counter = 0
  while (num > arr[counter]) {
    counter++
  }
  return counter
}
console.log(findIndexThree([1,2,3,4], 1.5))
console.log(findIndexThree([1,2,3,4], 7.5))


// #4: Finding the index of the value directly 
function findIndexFour(arr, num) {
  let newArr = [...arr, num].sort((a,b) => a - b)
  return newArr.indexOf(num)
}
// or
// function findIndexFour(arr, num) {
//   arr.push(num)
//   arr.sort((a, b) => a - b)
//   return arr.indexOf(num)
// }
console.log(findIndexFour([1,2,3,4], 1.5))
console.log(findIndexFour([1,2,3,4], 7.5))


console.log(`Test: best performing implementation is #2 the for-loop to count the smaller values. All other solutions considered are over 90% slower as noticed in the screenshot.`)
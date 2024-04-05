console.log(`Fibonacci -- Iterative and Recursive and Memoization Approaches`)

// Iterative Approach
function fibonacci(n) {
  let previous = 1,
      current = 1

      if (n <= 1) {
        return 1
      } else {
        let counter = n - 1
        while (counter) {
          let temp = current
          current += previous
          previous = temp
          counter --
        }
      }
      return current
}
console.log(fibonacci(10))


// Recursive Approach
function fibonacciRecursive(n) {
  if (n <= 1) {
    return 1
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}
console.log(fibonacciRecursive(10))

// Memoization Approach
function fibonacciMemoization(n, memo) {
  memo = memo || {}
  if (memo[n]) {
    return memo[n]
  }
  if (n <= 1) {
    return 1
  }
  return memo[n] = fibonacciMemoization(n - 1, memo) + fibonacciMemoization(n - 2, memo)
}
console.log(fibonacciMemoization(10))
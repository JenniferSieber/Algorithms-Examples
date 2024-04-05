// Using A For Loop
function factorial(n) {
  if (n <= 1) {
    return 1
  }

  for (let i = n - 1; i >= 1; i--) {
    n *= i
  }
  return n
}
console.log(factorial(1))
console.log(factorial(3))


// USING A WHILE LOOP
function factorialA (n) {
  let result = n
  if (n <= 1) {
    return 1
  }
  while (n > 1) {
    n--
    result *= n
  }
  return result
}
console.log(factorialA(1))
console.log(factorialA(3))


// USING MEMOIZATION
function factorialB(n, memo) {
  memo = memo || {}
  if (memo[n]) {
    return memo[n]
  }
  if (n === 0) {
    return 1
  }
  return memo[n] = n * factorialB(n -1, memo)
}
console.log(factorialB(1))
console.log(factorialB(3))
const countdown = (number) => {
  console.log(number)
  number > 0 && countdown(number - 1)
}

countdown(21)

const factorial = (number) => number === 1 ? 1 : number * factorial(number - 1)

console.log(factorial(5))

const countdown = (number) => {
  console.log(number)
  number > 0 && countdown(number - 1)
}

countdown(21)
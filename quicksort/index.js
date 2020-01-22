const quicksort = (array) => {
  if (array.length < 2) return array

  const pivot = array[0]

  const lowerElements = array.filter((element) => element < pivot)
  const higherElements = array.filter((element) => element > pivot)

  return [...quicksort(lowerElements), pivot, ...quicksort(higherElements)]
}

console.log(quicksort([4, 3, 7, 99, 52, 75, 23, 13, 31]))
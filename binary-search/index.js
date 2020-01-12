const binarySearch = (list, item) => {
  let low = 0
  let high = list.length - 1

  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    let guess = list[mid]

    if (guess == item) {
      return mid
    }
    
    if (guess > item) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
}

const arr = [1, 3, 5, 7, 9]

const result = binarySearch(arr, 1)
console.log(result)

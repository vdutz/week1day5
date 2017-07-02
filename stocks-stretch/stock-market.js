var example = [45, 24, 35, 31, 40, 38, 11]
// var example2 = [24, 45, 35, 31, 40, 38, 11]

function maxProfit(arr) {
  diff = 0
  for (x = 0; x < arr.length - 1; x++) {
    for (i = x+1; i < arr.length; i++) {
      if (arr[i] - arr[x] > diff) {
        diff = arr[i] - arr[x]
      }
    }
  }
  // for (i = 1; i < arr.length; i++)
  //   if  (arr[i] - arr[0] > diff) {
  //     diff = arr[i] - arr[0]
  //   }
  return diff
}

console.log(maxProfit(example))
function isValid(number) {
  var string = String(number)
  var stringCharacters = string.split("")
  var total = 0
  for (i = 0; i < stringCharacters.length; i++) {
    if (i % 2 === 0) {
      total += Number(stringCharacters[i])
      // console.log("Test - Even Index")
      // console.log(stringCharacters[i])
    } else {
      doubled = stringCharacters[i] * 2
      // console.log("Test - Odd Index")
      // console.log(doubled)
      if (String(doubled).length == 2) {
        list = String(doubled).split("")
        finalNumber = Number(list[0]) + Number(list[1])
        // console.log(finalNumber)
        total += finalNumber
      } else {
        total += doubled
      }
    }
  }
  // console.log(total)
  // console.log(total % 10 === 0)
  return (total % 10 === 0)
}

isValid(79927398713)

module.exports = {
  isValid: isValid
}
function test1() {
  console.log("Test 1")
  test2()
}

function test2() {
  console.log("Test 2")
}

module.exports = {
  test1: test1,
  //test2: test2
}
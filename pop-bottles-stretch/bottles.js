function bottles(investment) {

  fullBottles = Math.floor(investment / 2)
  caps = 0
  bodies = 0
  totalBottlesReceived = fullBottles
  bottlesFromBodyRecycling = 0
  bottlesFromCapRecycling = 0

  // Run loop if any of the following are true:
  //    - there are 2 or more bodies
  //    - there are 4 or more caps
  //    - there are 1 or more fullBottles
  while (bodies>= 2 || caps >= 4 || fullBottles > 0) {

    // Stage 1 - Separate fullBottles into bodies and caps
    bodies += fullBottles
    caps += fullBottles
    fullBottles = 0

    // console.log("Stage 1: ", fullBottles, bodies, caps)

    // Stage 2 - Exchange bodies for fullBottles
    fullBottles += Math.floor(bodies / 2)
    totalBottlesReceived += Math.floor(bodies / 2)
    bottlesFromBodyRecycling += Math.floor(bodies / 2)
    bodies = bodies % 2

    //console.log("Stage 2: ", fullBottles, bodies, caps)

    // Stage 3 - Exchange caps for fullBottles
    fullBottles += Math.floor(caps / 4)
    totalBottlesReceived += Math.floor(caps/ 4)
    bottlesFromCapRecycling += Math.floor(caps/ 4)
    caps = caps % 4

    //console.log("Stage 3: ", fullBottles, bodies, caps)

  }

  console.log("Full bottles left: ", fullBottles)
  console.log("Bodies left: ", bodies)
  console.log("Caps left: ", caps)
  console.log("Total bottles received: ", totalBottlesReceived)
  console.log("Total bottles purchased: ", Math.floor(investment / 2))
  console.log("Total bottles received from body recycling: ", bottlesFromBodyRecycling)
  console.log("Total bottles received from cap recycling: ", bottlesFromCapRecycling)

}

bottles(20)
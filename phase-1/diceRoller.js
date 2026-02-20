function rollMultipleDice(numberOfDice, sides) {
    let rolls = []

    for (let i = 0; i < numberOfDice /* maximum number i can reach */; i++) {
        rolls.push(Math.floor((Math.random() * sides)) + 1)
    }

    return rolls
}

console.log(rollMultipleDice(3, 20))
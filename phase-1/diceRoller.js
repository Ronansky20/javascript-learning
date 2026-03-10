function rollDice(sides, count = 1) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const rolls = []
            for (let i = 0; i < count; i++) {
                const roll = Math.floor(Math.random() * sides + 1)
                rolls.push(roll)
            }
            // Total should be after the rolls, not before.
            const total = rolls.reduce((sum, roll) => sum + roll, 0)
            resolve({ rolls: rolls, total: total, formula: count + "d" + sides })
        }, 500);
    })
}

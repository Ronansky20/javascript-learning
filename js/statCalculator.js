// Arc 1, Exercise 1.1 - Variables & Types: calculates final D&D stats handling mixed input types

function calculateStat(baseStat, racialBonus, itemBonus, level) {
    baseStat = baseStat - 0
    racialBonus = racialBonus - 0
    itemBonus = itemBonus - 0
    level = level - 0

    if (parseInt(level) > 5) {
        return baseStat + racialBonus + itemBonus + level;
    } else {
        return baseStat + racialBonus + itemBonus;
    }
}

console.log(calculateStat(15, "2", 3, "7"));
console.log(calculateStat(10, 0, "", 3));

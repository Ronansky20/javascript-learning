// Arc 1, Exercise 1.2 - Functions: converts D&D stats to modifiers, includes higher-order function usage

export function getModifier(stat) {
    return Math.floor((stat - 10) / 2);
}

export function formatModifier(modifier) {
    if (modifier >= 0) {
        return "+" + modifier;
    } else {
        return "" + modifier;
    }
}

function getSavingThrow(baseStat, proficiency = false) {
    const modifier = getModifier(baseStat);
    if (proficiency) {
        return modifier + 2
    }
    else return modifier;
}

function applyStatFunction(stat, fn) {
    return fn(stat);
}

console.log(getModifier(16));                    // Should print: 3
console.log(formatModifier(3));                  // Should print: "+3"
console.log(getSavingThrow(16, true));           // Should print: 5
console.log(applyStatFunction(16, getModifier));
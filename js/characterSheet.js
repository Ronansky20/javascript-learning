import { getModifier, formatModifier } from "./modifiercalculator.js";

const character = {
    name: "Thorin Oakenshield",
    class: "Fighter",
    level: 5,
    stats: { str: 16, dex: 12, con: 14, int: 10, wis: 11, cha: 8 },
    hp: 45,
    maxHp: 50
};

const statArray = ["str", "dex", "con", "int", "wis", "cha"]
const sheetDiv = document.getElementById("characterSheet")

for (let i = 0; i < statArray.length; i++) {
    const statName = statArray[i]
    const statValue = character.stats[statName]
    const modifier = getModifier(statValue)
    const formattedModifier = formatModifier(modifier);

    const statDiv = document.createElement("div")
    statDiv.classList.add("stats");
    statDiv.textContent = `${statName.toUpperCase()}: ${statValue} (${formattedModifier})`;

    sheetDiv.appendChild(statDiv)
}


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
const statDiv = document.createElement("div")



for (let i = 0; i < statArray.length; i++) {
    const statName = statArray[i]

    const statValue = character.stats[statName]

    console.log(statName, ":", statValue)

    statDiv.textContent = statValue;

    sheetDiv.appendChild(statDiv)
}


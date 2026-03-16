import { getModifier, formatModifier } from "./modifiercalculator.js";
import { rollDice } from "./diceRoller.js";

let character = {
    name: "Thorin Oakenshield",
    class: "Fighter",
    level: 7,
    stats: { str: 16, dex: 12, con: 14, int: 10, wis: 11, cha: 8 },
    hp: 45,
    maxHp: 50
};

const statArray = ["str", "dex", "con", "int", "wis", "cha"]
const sheetDiv = document.getElementById("characterSheet")
const historyDiv = document.getElementById("rollHistory")
const saveCharacterButton = document.getElementById("characterSave")
const hpDiv = document.getElementById("characterHp")

const savedCharacter = localStorage.getItem('character')

export function renderCharacterSheet() {
    sheetDiv.innerHTML = ""
    for (let i = 0; i < statArray.length; i++) {

        const statName = statArray[i]
        const statValue = character.stats[statName]
        const modifier = getModifier(statValue)
        const formattedModifier = formatModifier(modifier);

        const statDiv = document.createElement("div")
        statDiv.classList.add("stats");
        statDiv.textContent = `${statName.toUpperCase()}: ${statValue} (${formattedModifier})`;

        sheetDiv.appendChild(statDiv)

        statDiv.dataset.stat = statName
        statDiv.dataset.modifier = modifier
    }
}

export function getCharacterHp() {
    hpDiv.innerHTML = ""

    const remainingHp = character.hp
    const maxHp = character.maxHp

    const hpRemainingDiv = document.createElement("div")
    hpRemainingDiv.classList.add("hp")
    hpRemainingDiv.textContent = `Current HP: ${remainingHp}/${maxHp}`

    hpDiv.appendChild(hpRemainingDiv)
}

export function saveCharacter() {
    if (savedCharacter) {
        character = JSON.parse(savedCharacter);
    }

    sheetDiv.addEventListener("click", async (event) => {
        const clickedElement = event.target

        if (!clickedElement.dataset.stat) {
            console.error('No data found')
            return
        } else {
            const statName = clickedElement.dataset.stat;
            const modifier = Number(clickedElement.dataset.modifier);

            const rollResult = await rollDice(20)
            const modifiedRollResult = rollResult.total + modifier
            const formattedRollResult = formatModifier(modifiedRollResult)
            const formattedModifier = formatModifier(modifier)

            const historyListDiv = document.createElement("div")

            historyListDiv.classList.add("rollHistory")
            historyListDiv.textContent = `The result is: ${statName.toUpperCase()}, ${rollResult.total}, ${formattedModifier}, ${formattedRollResult}`
            historyDiv.appendChild(historyListDiv)
        }
    })

    saveCharacterButton.addEventListener("click", () => {
        const characterJSON = JSON.stringify(character)
        localStorage.setItem('character', characterJSON)

        const savedCharacter = localStorage.getItem('character')
        console.log(`Your character has been saved! ${savedCharacter}`)
    })
}
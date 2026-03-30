import { getModifier, formatModifier } from "./modifiercalculator.js";
import { rollDice } from "./diceRoller.js";
import { makeAttack } from "./attackSystem.js";

export let character = {
    name: "Thorin Oakenshield",
    class: "Fighter",
    level: 7,
    stats: { str: 16, dex: 12, con: 14, int: 10, wis: 11, cha: 8 },
    weaponAttackBonus: 2,
    weaponDamageBonus: 2,
    gold: 100,
    inventory: [],
    currentWeight: 0,
    maxWeight: 100,
    maxSlots: 10,
    hp: 45,
    maxHp: 50
};

const statArray = ["str", "dex", "con", "int", "wis", "cha"]
const sheetDiv = document.getElementById("characterSheet")
const historyDiv = document.getElementById("rollHistory")
const saveCharacterButton = document.getElementById("characterSave")
const hpDiv = document.getElementById("characterHp")
const rollAttackButton = document.getElementById("rollAttackButton")
const attackRollHistoryDiv = document.getElementById("attackRollHistory")
const advantageCheckbox = document.getElementById("advantageCheckbox")
const disadvantageCheckbox = document.getElementById("disadvantageCheckbox")

const savedCharacter = localStorage.getItem('character');
if (savedCharacter) {
    character = JSON.parse(savedCharacter);
}

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

export function rollDamage() {
    rollAttackButton.addEventListener("click", async () => {
        const targetAC = 15

        async function rollAttackHandler(advantageDisadvantageResult) {
            const attackModifier = getModifier(character.stats.dex)
            const weaponAttackBonus = character.weaponAttackBonus

            const attackBonus = attackModifier + weaponAttackBonus

            const damageModifier = getModifier(character.stats.str)
            const weaponDamageBonus = character.weaponDamageBonus

            console.log(advantageDisadvantageResult)

            const damageBonus = damageModifier + weaponDamageBonus + advantageDisadvantageResult
            const attackRoll = await makeAttack(attackBonus, damageBonus, targetAC)

            const attackRollHistory = document.createElement("div")

            if (attackRoll.hit === true) {
                attackRollHistory.textContent = `You hit! You rolled a: ${attackRoll.attackRoll}`
            } else {
                attackRollHistory.textContent = `You missed.... You rolled a: ${attackRoll.attackRoll}`
            }

            attackRollHistoryDiv.appendChild(attackRollHistory)
        }

        if (advantageCheckbox.checked) {
            let highestResult = 0
            console.log('You are rolling with advantage')

            const doubleDice = [
                rollDice(20, 2).then(result => result.total),
                rollDice(20, 2).then(result => result.total)
            ]

            Promise.all(doubleDice).then(results => {
                const [num1, num2] = results

                if (num1 > num2) {
                    highestResult = num1
                    rollAttackHandler(highestResult)
                } else if (num2 > num1) {
                    highestResult = num2
                    rollAttackHandler(highestResult)
                }
            })
        }

        if (disadvantageCheckbox.checked) {
            let lowestResult = 0
            console.log('You are rolling with disadvantage')

            const doubleDice = [
                rollDice(20, 2).then(result => result.total),
                rollDice(20, 2).then(result => result.total)
            ]

            Promise.all(doubleDice).then(results => {
                const [num1, num2] = results

                if (num1 > num2) {
                    lowestResult = num2
                    rollAttackHandler(lowestResult)
                } else if (num2 > num1) {
                    lowestResult = num1
                    rollAttackHandler(lowestResult)
                }
            })
        }
    })
}

export function saveCharacter() {
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
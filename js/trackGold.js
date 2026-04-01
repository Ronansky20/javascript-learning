import { character } from "./characterSheet.js"
import { addGold } from "./inventory.js"

const goldDiv = document.getElementById("ownedGold")
const addGoldButton = document.getElementById("addGoldButton")
const goldOwnedDiv = document.createElement("div")

export function addGoldField() {
    function goldList() {
        goldOwnedDiv.classList.add("goldAmount")
        goldOwnedDiv.textContent = `You have ${character.gold} gold.`
        goldDiv.appendChild(goldOwnedDiv)
    }

    goldList()

    addGoldButton.addEventListener("click", () => {
        const addGoldField = document.getElementById("addGoldField").value
        const goldValue = parseInt(addGoldField)

        addGold(goldValue)
        console.log(character.gold)
        goldList()
    })
}

export function renderGoldDisplay() {
    goldOwnedDiv.textContent = `You have ${character.gold} gold.`
}
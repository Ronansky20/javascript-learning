import { character } from "./characterSheet.js"

const goldDiv = document.getElementById("ownedGold")
const addGoldButton = document.getElementById("addGoldButton")
const goldOwnedDiv = document.createElement("div")

export function addGold() {
    function goldList() {
        goldOwnedDiv.classList.add("goldAmount")
        goldOwnedDiv.textContent = `You have ${character.gold} gold.`
        goldDiv.appendChild(goldOwnedDiv)
    }

    goldList()

    addGoldButton.addEventListener("click", () => {
        const addGoldField = document.getElementById("addGoldField").value
        const goldValue = parseInt(addGoldField)

        inv.addGold(goldValue)
        console.log(character.gold)
        goldList()
    })
}
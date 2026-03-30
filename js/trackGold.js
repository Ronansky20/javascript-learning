import { createInventory } from "./inventory.js"

const goldDiv = document.getElementById("ownedGold")
const addGoldButton = document.getElementById("addGoldButton")
const goldOwnedDiv = document.createElement("div")

export function addGold(inventorySize) {
    const inv = createInventory(inventorySize)
    function goldList() {
        goldOwnedDiv.classList.add("goldAmount")
        goldOwnedDiv.textContent = `You have ${inv.getInventory()[1]} gold.`
        goldDiv.appendChild(goldOwnedDiv)
    }

    goldList()

    addGoldButton.addEventListener("click", () => {
        const addGoldField = document.getElementById("addGoldField").value
        const goldValue = parseInt(addGoldField)

        inv.addGold(goldValue)
        console.log(inv.getInventory()[1])
        goldList()
    })
}
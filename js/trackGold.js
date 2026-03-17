import { createInventory } from "./inventory.js"

const goldDiv = document.getElementById("ownedGold")
const addGoldField = document.getElementById("addGoldField").value
const addGoldButton = document.getElementById("addGoldButton")

export function addGold() {
    addGoldButton.addEventListener("click", () => {
        const inv = createInventory()
        inv.addGold(addGoldField)
        console.log(inv.getInventory()[1])
    })
}
import { createInventory } from "./inventory.js";

const weightDiv = document.getElementById("weightDiv")
const weightAddField = document.getElementById("addItemWeightField")
const addItemField = document.getElementById("addItemField")
const addItemForm = document.getElementById("addItemForm")
const currentWeightDiv = document.createElement("div")
const maxWeightDiv = document.createElement("div")

export function inventorySizeDisplay(inventorySize) {
    const inv = createInventory(inventorySize)

    const maxWeight = inv.getInventory()[2]
    const remainingWeight = inv.getInventory()[3]

    currentWeightDiv.textContent = `The current weight of your character is: ${remainingWeight}`
    maxWeightDiv.textContent = `The max weight of your character is: ${maxWeight}`

    weightDiv.appendChild(currentWeightDiv)
    weightDiv.appendChild(maxWeightDiv)
}

export function inventoryItemManager(inventorySize) {
    const inv = createInventory(inventorySize)
    const weightAddFieldValue = parseInt(weightAddField)
    const remainingWeight = inv.getInventory()[3]

    if (remainingWeight > weightAddFieldValue) {
        addItemForm.addEventListener("sumbit", function (event) {
            event.preventDefault()

        })
    }
}
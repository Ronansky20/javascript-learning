import { createInventory } from "./inventory.js";

const weightDiv = document.getElementById("weightDiv")
const addItemField = document.getElementById("addItemField")
const addItemForm = document.getElementById("addItemForm")
const currentWeightDiv = document.createElement("div")
const maxWeightDiv = document.createElement("div")

export function inventorySizeDisplay(inventorySize) {
    const inv = createInventory(inventorySize)

    const maxWeight = inv.getInventory()[2]
    const currentWeight = inv.getInventory()[3]

    currentWeightDiv.textContent = `The current weight of your character is: ${currentWeight}`
    maxWeightDiv.textContent = `The max weight of your character is: ${maxWeight}`

    weightDiv.appendChild(currentWeightDiv)
    weightDiv.appendChild(maxWeightDiv)

    addItemForm.addEventListener("submit", function (event) {
        const weightAddFieldValue = document.getElementById("addItemWeightField").value
        const weightAddFieldInteger = parseInt(weightAddFieldValue, 10)
        const maxWeight = inv.getInventory()[2]
        const availableWeight = maxWeight - currentWeight

        event.preventDefault();
        if (availableWeight >= weightAddFieldInteger) {
            const itemToBeAdded = addItemField.value

            inv.addItem(itemToBeAdded, weightAddFieldInteger)
            console.log('The item has been added', inv.getInventory()[0])

            const newCurrentWeight = inv.getInventory()[3]
            currentWeightDiv.textContent = `The current weight of your character is: ${newCurrentWeight}`
        } else {
            console.log(`You don't have enough space for this item...`)
        }
    })
}
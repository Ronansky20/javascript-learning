import { character } from "./characterSheet.js"
import { addItem, removeItem } from "./inventory.js"

const weightDiv = document.getElementById("weightDiv")
const addItemField = document.getElementById("addItemField")
const addItemForm = document.getElementById("addItemForm")
const itemDiv = document.getElementById("itemDiv")
const removeItemForm = document.getElementById("removeItemForm")

const currentWeightDiv = document.createElement("div")
const maxWeightDiv = document.createElement("div")

export function inventorySizeDisplay() {

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
            const itemArray = inv.getInventory()[0]

            addItem(itemToBeAdded, weightAddFieldInteger)
            console.log('The item has been added', inv.getInventory()[0])

            const newCurrentWeight = inv.getInventory()[3]
            currentWeightDiv.textContent = `The current weight of your character is: ${newCurrentWeight}`

            console.log(itemArray)

            character.inventory.push({ name: itemName, weight: weight });

            itemDiv.innerHTML = ''
            for (let i = 0; i < itemArray.length; i++) {
                const item = itemArray[i];
                const itemListDiv = document.createElement("div")

                itemListDiv.textContent = item.name
                itemDiv.appendChild(itemListDiv)

                itemDiv.dataset.name = item.name
            }
        } else {
            console.log(`You don't have enough space for this item...`)
        }
    })

    removeItemForm.addEventListener("submit", function (event) {
        const itemRemoveFieldValue = document.getElementById("removeItemField").value
        const itemArray = inv.getInventory()[0]

        event.preventDefault();
        if (itemArray.some(item => item.name === itemRemoveFieldValue)) {
            removeItem(itemRemoveFieldValue)

            const newCurrentWeight = inv.getInventory()[3]
            currentWeightDiv.textContent = `The current weight of your character is: ${newCurrentWeight}`

            itemDiv.innerHTML = ''

            const updatedArray = inv.getInventory()[0]
            for (let i = 0; i < updatedArray.length; i++) {
                const item = updatedArray[i];
                const itemListDiv = document.createElement("div")

                itemListDiv.textContent = item.name
                itemDiv.appendChild(itemListDiv)
            }
        } else {
            console.log(`This item is not in your inventory`)
            console.log(itemArray)
        }
    })
}
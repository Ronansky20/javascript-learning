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
    const maxWeight = character.maxWeight
    const currentWeight = character.currentWeight

    currentWeightDiv.textContent = `The current weight of your character is: ${currentWeight}`
    maxWeightDiv.textContent = `The max weight of your character is: ${maxWeight}`

    weightDiv.appendChild(currentWeightDiv)
    weightDiv.appendChild(maxWeightDiv)

    addItemForm.addEventListener("submit", function (event) {
        const weightAddFieldValue = document.getElementById("addItemWeightField").value
        const weightAddFieldInteger = parseInt(weightAddFieldValue, 10)
        const maxWeight = character.maxWeight
        const availableWeight = maxWeight - currentWeight

        event.preventDefault();
        if (availableWeight >= weightAddFieldInteger) {
            const itemToBeAdded = addItemField.value
            const itemArray = character.inventory

            addItem(itemToBeAdded, weightAddFieldInteger)
            console.log('The item has been added', character.inventory)

            const newCurrentWeight = character.currentWeight
            currentWeightDiv.textContent = `The current weight of your character is: ${newCurrentWeight}`

            console.log(itemArray)

            renderInventory()
        } else {
            console.log(`You don't have enough space for this item...`)
        }
    })

    removeItemForm.addEventListener("submit", function (event) {
        const itemRemoveFieldValue = document.getElementById("removeItemField").value
        const itemArray = character.inventory

        event.preventDefault();
        if (itemArray.some(item => item.name === itemRemoveFieldValue)) {
            removeItem(itemRemoveFieldValue)

            const newCurrentWeight = character.currentWeight
            currentWeightDiv.textContent = `The current weight of your character is: ${newCurrentWeight}`

            renderInventory()
        } else {
            console.log(`This item is not in your inventory`)
            console.log(itemArray)
        }
    })
}

export function renderInventory() {
    itemDiv.innerHTML = '';

    for (let i = 0; i < character.inventory.length; i++) {
        const item = character.inventory[i];
        const itemListDiv = document.createElement("div");
        itemListDiv.textContent = item.name;
        itemDiv.appendChild(itemListDiv);
    }

    // Update weight display
    currentWeightDiv.textContent = `The current weight of your character is: ${character.currentWeight}`;
}
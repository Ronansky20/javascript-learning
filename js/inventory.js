import { character } from "./characterSheet.js";

export function addItem(name, weight) {
    if (character.inventory.length >= character.maxSlots || character.currentWeight + weight > character.maxWeight) {
        return false;
    } else {
        character.inventory.push({ name: name, weight: weight });
        character.currentWeight += weight;
        return character.inventory;
    }
}

export function removeItem(name) {
    for (let i = 0; i < character.inventory.length; i++) {
        if (character.inventory[i].name === name) {
            character.currentWeight -= character.inventory[i].weight
            character.inventory.splice(i, 1)
            return character.inventory
        }
    }
    return character.inventory;
}

export function addGold(amount) {
    character.gold += amount
    return true
}

export function spendGold(amount) {
    if (amount <= character.gold) {
        character.gold = character.gold - amount
    }
    return false
}
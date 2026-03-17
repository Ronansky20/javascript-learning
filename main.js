import { renderCharacterSheet, saveCharacter, getCharacterHp } from "./js/characterSheet.js";
import { createInventory } from "./js/inventory.js"
import { addGold } from "./js/trackGold.js";

const inventorySize = 10

saveCharacter()
renderCharacterSheet()
getCharacterHp()

//const inv = createInventory(10)
//inv.addGold(500)
//console.log(inv.getInventory()[1]) // Return gold, always second place in array
addGold(inventorySize)
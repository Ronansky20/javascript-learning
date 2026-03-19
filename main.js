import { renderCharacterSheet, saveCharacter, getCharacterHp } from "./js/characterSheet.js";
import { addGold } from "./js/trackGold.js";
import { inventorySizeDisplay } from "./js/inventoryManager.js";

const inventorySize = 10

saveCharacter()
renderCharacterSheet()
getCharacterHp()
inventorySizeDisplay(inventorySize)
addGold(inventorySize)
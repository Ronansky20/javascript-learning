import { renderCharacterSheet, saveCharacter, getCharacterHp } from "./js/characterSheet.js";
import { addGold } from "./js/trackGold.js";
import { inventorySizeDisplay } from "./js/inventoryManager.js";
import { diceTray } from "./js/diceTray.js";

const inventorySize = 10

saveCharacter()
renderCharacterSheet()
getCharacterHp()
inventorySizeDisplay(inventorySize)
addGold(inventorySize)
diceTray()
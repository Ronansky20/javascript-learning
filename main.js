import { renderCharacterSheet, saveCharacter, getCharacterHp, rollDamage, character, loadCharacter } from "./js/characterSheet.js";
import { addGold } from "./js/trackGold.js";
import { inventorySizeDisplay, renderInventory } from "./js/inventoryManager.js";
import { diceTray } from "./js/diceTray.js";

const characterSelect = document.getElementById("characterSelectDropdown")

function retrieveCharacters() {
    for (let i = 0; i < localStorage.length; i++) {
        const characterKey = localStorage.key(i)

        const characterOptions = document.createElement("option")
        characterOptions.textContent = characterKey
        characterOptions.value = characterKey

        characterSelect.appendChild(characterOptions)
    }

    characterSelect.addEventListener(`change`, () => {
        const savedCharacter = localStorage.getItem(characterSelect.value);

        console.log('This is a click event')
        loadCharacter(JSON.parse(savedCharacter))
        saveCharacter()
        renderCharacterSheet()
        getCharacterHp()
        rollDamage()
        renderInventory()
        inventorySizeDisplay()
        addGold()
    })
}

diceTray()
retrieveCharacters()


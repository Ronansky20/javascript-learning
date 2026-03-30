import { rollDice } from "./diceRoller.js";

export function diceTray() {
    const diceTray = document.getElementById("diceTrayDiv");

    const diceArray = [20, 6, 8, 4, 10, 12];

    for (let index = 0; index < diceArray.length; index++) {
        const diceTrayButtonIndex = diceArray[index];

        const indDiceTrayButton = document.createElement("button");
        indDiceTrayButton.textContent = `d${diceTrayButtonIndex}`;

        indDiceTrayButton.addEventListener("click", async (event) => {
            const diceRollResult = document.createElement("div");
            const clickedElement = event.target;
            console.log(event.target);

            const rollResult = await rollDice(diceTrayButtonIndex);
            console.log(rollResult);

            diceRollResult.textContent = `Your d${diceTrayButtonIndex} rolled a: ${rollResult.total}`;
            diceTray.appendChild(diceRollResult);
        });

        diceTray.appendChild(indDiceTrayButton);
    }
}

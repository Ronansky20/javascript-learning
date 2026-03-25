// Arc 2, Exercise 2.3 - Async/Await: full attack resolver with try/catch built on the dice roller

import { rollDice } from "./diceRoller.js";

export async function makeAttack(attackBonus, damageBonus, targetAC) {
    try {
        const rollResult = await rollDice(20)
        const rollCalculation = rollResult.total + attackBonus

        if (rollCalculation > targetAC) {
            const rollDamage = await rollDice(6, 2)
            const attackRoll = rollDamage.total + damageBonus

            console.log(`The attack hit! ${attackRoll}`);
            return { attackRoll, hit: true };
        } else {
            console.log(`The attack missed...`);
            return { attackRoll: rollCalculation, hit: false };
        }
    }
    catch (err) {
        console.error(err);
        return null
    }
}

//makeAttack(5, 3, 15).then(result => console.log(result))
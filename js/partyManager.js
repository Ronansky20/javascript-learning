// Arc 1, Exercise 1.4 - Array Methods: party analysis using map, filter, and reduce

const party = [
    { name: "Thorin", class: "Fighter", hp: 45, maxHp: 50, level: 5 },
    { name: "Elara", class: "Wizard", hp: 20, maxHp: 30, level: 5 },
    { name: "Brok", class: "Cleric", hp: 35, maxHp: 40, level: 4 },
];

const partyWithHP = party.map((party) => ({
    ...party,
    hpPercentage: Math.ceil((party.hp / party.maxHp) * 100)
}));
const hpNeedHealing = partyWithHP.filter((party) => (party.hpPercentage < 75))
const totalPartyHP = partyWithHP.reduce((health, party) => { return health + party.hp }, 0)
const findLowestHP = (arr) => {
    return arr.reduce((health, party) => {
        if (party.hpPercentage < health.hpPercentage) {
            return party
        } else {
            return health
        }
    }, arr[0])
}

const fightersBelowPercentage = partyWithHP.filter((party) => (party.class === "Fighter")).filter((party) => (party.hpPercentage < 50))

console.log(partyWithHP)
console.log(findLowestHP(partyWithHP))
console.log(fightersBelowPercentage)
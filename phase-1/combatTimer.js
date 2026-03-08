const partyMembers = [
    "Thorin",
    "Elara",
    "Goblin"
]

function startCombatRound(participants) {
    for (let i = 0; i < participants.length; i++) {
        let currentParticipant = participants[i]
        setTimeout(() => console.log(`${currentParticipant}'s Turn!`), i * 2000)
    }
}

startCombatRound(partyMembers)
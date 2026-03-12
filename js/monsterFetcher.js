async function getMonster(name) {
    try {
        const response = await fetch(`https://www.dnd5eapi.co/api/monsters/${name}`)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json()
        return {
            name: data.name,
            hp: data.hit_points,
            AC: data.armor_class[0],
            CR: data.challenge_rating
        }
    }
    catch (err) {
        console.error(err);
    }
}

// getMonster('goblin').then(result => console.log(result))

// Promise.all([getMonster('goblin'), getMonster('adult-red-dragon'), getMonster('owlbear')]).then(result => console.log(result))
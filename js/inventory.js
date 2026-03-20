// Arc 1, Exercise 1.3 - Closures: private inventory system using closure to encapsulate state

export function createInventory(maxSlots) {
    let items = [];
    let gold = 0;
    let maxWeight = 100;
    let currentWeight = 0;

    const addItem = (name, weight) => {
        if (items.length >= maxSlots || currentWeight + weight > maxWeight) {
            return false;
        } else {
            items.push({ name: name, weight: weight });
            currentWeight += weight;
            return items;
        }
    }

    const removeItem = (name) => {
        for (let i = 0; i < items.length; i++) {
            if (items[i].name === name) {
                items.splice(i, 1)
                return items
            }
        }
        return items;
    }

    const addGold = (amount) => {
        gold += amount
        return true
    }

    const spendGold = (amount) => {
        if (amount <= gold) {
            gold = gold - amount
        }
        return false

    }

    const getInventory = () => {
        return [items, gold, maxWeight, currentWeight]
    }

    return {
        addItem,
        removeItem,
        addGold,
        spendGold,
        getInventory
    };
}

//const inv = createInventory(10)
//inv.addItem("Sword", 10);
//inv.addGold(500);
//inv.spendGold(700);
//inv.removeItem("Sword")
//console.log(inv.items)
//console.log(inv.getInventory())
// Arc 1, Exercise 1.5 - this Keyword: spell casting system demonstrating bind, call, and arrow functions

const wizard = {
    name: "Gandalf",
    mana: 100,
    maxMana: 100,
    castSpell: function (spellCost, spellName) {
        if (this.mana >= spellCost) {
            this.mana -= spellCost;
            console.log(this.name + " casts " + spellName);
            return true;
        }
        return false;
    },

    restoreMana: function () {
        setTimeout(() => {
            this.mana = this.maxMana
            console.log(this.name + " mana restored!")
        }, 1000)
    }
};

const castBound = wizard.castSpell
castBound(30, "Fireball")

//console.log(wizard)

//const pleaseBreak = console.log(wizard.castSpell(10, "Fireball"))


const applesBanana = {
    name: "Timmy",
    amount: 100,

    whatDoesHeLike: function (price, fruit) {
        if (this.amount >= price) {
            this.amount -= price;
            console.log(this.name + " likes " + fruit)
            return true
        }
        return false
    }
}

console.log(applesBanana.whatDoesHeLike(20, "Banana"))
# JavaScript Learning Journey

A structured, self-directed roadmap to build a solid understanding of JavaScript fundamentals. I have professional backend experience with Node.js but wanted to go back to basics and truly understand the language rather than just use it.

All exercises are D&D / TTRPG themed because learning should be fun.

## Structure

Each arc focuses on a core JavaScript concept, with exercises that build on each other toward a final TTRPG character sheet web app.

| Arc | Topic | Status |
|-----|-------|--------|
| Arc 1 | Variables, functions, closures, loops, array methods, `this` | ✅ Complete |
| Arc 2 | Event loop, Promises, async/await, Fetch API | ✅ Complete |
| Arc 3 | DOM manipulation, events, localStorage | 🔄 In progress |

## What's in `/js`

Each file is a standalone exercise from Arc 1 and Arc 2:

| File | What it covers |
|------|----------------|
| `statCalculator.js` | Variables & types — calculates D&D stats with type coercion |
| `modifierCalculator.js` | Functions & higher-order functions — converts stats to modifiers |
| `inventory.js` | Closures & private data — inventory system with encapsulated state |
| `diceRoller.js` | For loops & Promises — rolls multiple dice, returns results async |
| `partyManager.js` | Array methods — map, filter, reduce on a party of characters |
| `abilitySystem.js` | `this` keyword — spell casting with bind, call, and arrow functions |
| `combatTimer.js` | Event loop & setTimeout — sequential turn announcements with delays |
| `attackSystem.js` | Async/await & try/catch — full attack resolver using the dice roller |
| `monsterFetcher.js` | Fetch API — pulls live monster data from the D&D 5e API |

Arc 3 exercises move into the browser and will live in the root alongside `index.html`.

## Why

I previously relied heavily on AI assistance at work without fully retaining the underlying knowledge. This roadmap is my way of fixing that, building genuine understanding from the ground up.

---

*Part of my broader backend development journey. See my [GitHub profile](https://github.com/Ronansky20) for more.*

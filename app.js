const pokemon = require('./data.js');

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],/*
    Exercise 3
    1. Add a new property to the `game` object. Let's call it "difficulty".
    2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?
    
    
    Solve Exercise 3 here:
    */    
    difficulty: ['Easy'],
  }
  
// console.dir(pokemon, { maxArrayLength: null })

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?
Solve Exercise 4 here:
*/

let starterPokemon = null
for (let i = 0 ; i < pokemon.length; i ++){
    if (pokemon[i].starter){
        starterPokemon = pokemon[i]
        break
    }
}
game.party.push(starterPokemon)

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?
Solve Exercise 5 here:
*/

let addPokemon = null
for (let i = 0 ; i < pokemon.length ; i ++){
    if (!pokemon[i].starter && addPokemon < 3){
        game.party.push(pokemon[i])
        addPokemon ++
    }
}
/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.
Solve Exercise 6 here:
*/
for (let i = 0 ; i < game.gyms.length ; i ++){
    if (game.gyms[i].difficulty < 3){
        game.gyms[i].completed = true
    }
}
/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?
Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu
More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 
Solve Exercise 7 here:
*/
function evolving(party, pokemon) {
    party.forEach((member, index) =>  {
        pokemon.forEach(p => {
            if (p.number === member.number + 1) {
                party.splice(index, 1, p)
                }
            }
        )
    }
)
}
evolving(game.party, pokemon)

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.
Solve Exercise 8 here:
*/

for (let i = 0 ; i < game.party.length ; i ++){
    console.log(game.party[i].name)
}


pokemon.forEach(poke => {
    if (poke.starter){
        console.log('Starter Pokemon:',(poke.name))
    }
})


// function catchPokemon(game, pokemonObj) { 
//     game.party.push(pokemonObj)
// }
// let newPokemon = { number: 40, name: 'Wigglytuff', type: 'normal', hp: 140, starter: false }

// catchPokemon(game, newPokemon)

game.catchPokemon = function(pokemonObj) {
    this.party.push(pokemonObj)
    for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].name === 'pokeball') {
            this.items[i].quantity -= 1; }
        }
    }
    let newPokemon = { number: 133, name: 'Eevee', type: 'Normal', hp: 55, starter: false }

    game.catchPokemon(newPokemon)


/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).
Solve Exercise 12 here:
*/

    for (let i = 0 ; i < game.gyms.length ; i ++){
        if (game.gyms[i].difficulty >3 && game.gyms[i].difficulty < 6){
            game.gyms[i].completed = true
        }
    }
    

    
    /*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/
    game.gymStatus = function (){
        let completedTally = 0
        let incompleteTally = 0
    for (let i = 0; i < this.gyms.length ; i ++){
        if (this.gyms[i].completed){
            completedTally++
    } else {
        incompleteTally++
    }
}
console.log(`completed: ${completedTally}`)
console.log(`incomplete: ${incompleteTally}`)
    }
    game.gymStatus()

    

    /*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.
This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.
Solve Exercise 14 here:
*/

game.partyCount = function (){
    let partycc = 0
    for (let i = 0 ; i < this.party.length; i ++){
        partycc++
}

console.log(`Number of Pokemon in party: ${partycc}`)
}
game.partyCount()


/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).
Solve Exercise 15 here:
*/
for (let i = 0 ; i < game.gyms.length ; i ++){
    if (game.gyms[i].difficulty < 8){
        game.gyms[i].completed = true
    }
}


    /*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/
    console.log(game)

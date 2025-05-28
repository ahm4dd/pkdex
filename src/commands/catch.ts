import { Pokemon } from "src/pokeapi.js";
import { State } from "src/state.js";
export async function commandCatch(state: State) {
  if (state.commandArg !== "") {
    const pokemon: Pokemon = await state.pokeapi.fetchPokemon(state.commandArg);
    console.log(`Throwing a Pokeball at ${pokemon.name}...`);
    const success =
      Math.floor(Math.random() * pokemon.base_experience) >
      pokemon.base_experience / 1.5; // 1.5 here is a number to up the chances of catching the pokemon for the player
    if (success) {
      console.log(`${pokemon.name} was caught!`);
      state.caughtPokemons[pokemon.name] = pokemon;
    } else {
      console.log(`${pokemon.name} escaped!`);
    }
  } else {
    console.log(
      "Error: You can't use the 'catch' command without an argument.",
    );
  }
}

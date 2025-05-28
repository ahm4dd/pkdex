import { Pokemon, Stat } from "src/pokeapi.js";
import { State } from "src/state.js";
export async function commandInspect(state: State) {
  if (state.commandArg !== "") {
    if (state.commandArg in state.caughtPokemons) {
      const pokemon: Pokemon = state.caughtPokemons[state.commandArg];
      console.log(`Name: ${pokemon.name}`);
      console.log(`Height: ${pokemon.height}`);
      console.log(`Weight: ${pokemon.weight}`);
      console.log(`stats:`);
      for (let stat of pokemon.stats) {
        console.log(`  -${stat.stat.name}: ${stat.base_stat}`);
      }
      console.log("Types: ");
      for (let type of pokemon.types) {
        console.log(`  - ${type.type.name}`);
      }
    } else {
      console.log("You have not caught that Pokemon yet.");
    }
  } else {
    console.log(
      "Error: You can't use the 'inspect' command without an argument.",
    );
  }
}

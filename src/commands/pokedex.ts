import { State } from "src/state.js";
export async function commandPokedex(state: State) {
  console.log("Your Pokedex:");
  for (const pokemon in state.caughtPokemons) {
    console.log(` - ${state.caughtPokemons[pokemon].name}`);
  }
}

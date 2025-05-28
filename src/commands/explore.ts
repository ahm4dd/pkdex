import { Location } from "src/pokeapi.js";
import { State } from "src/state.js";

export async function commandExplore(state: State) {
  console.log(`Exploring ${state.commandArg}...`);
  if (state.commandArg !== "") {
    const cachedObj = state.cache.get(state.commandArg);
    let location: Location;
    if (cachedObj !== undefined) {
      location = cachedObj.val as Location;
    } else {
      try {
        location = await state.pokeapi.fetchLocation(state.commandArg);
      } catch (e) {
        console.log(`${e}`);
      }
    }
    console.log("Found Pokemon:");
    for (const pokemonEncounter of location!.pokemon_encounters) {
      console.log(pokemonEncounter.pokemon.name);
    }
  } else {
    console.log(
      "Error: You can't use the 'explore' command without an argument.",
    );
  }
}

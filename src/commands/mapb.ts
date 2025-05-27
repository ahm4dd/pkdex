import { ShallowLocations } from "src/pokeapi.js";
import { State } from "src/state.js";

export async function commandMapb(state: State): Promise<void> {
  try {
    if (state.prevLocationURL) {
      const cachedObj = state.cache.get(state.prevLocationURL.toString());
      let locations: ShallowLocations;
      if (cachedObj !== undefined) {
        locations = cachedObj.val as ShallowLocations;
      } else {
        locations = await state.pokeapi.fetchLocations(
          state.prevLocationURL?.toString(),
        );
        state.cache.add(state.prevLocationURL.toString(), locations);
      }
      state.nextLocationURL = locations.next ?? null;
      state.prevLocationURL = locations.previous ?? null;
      for (const location of locations.results) {
        console.log(location.name);
      }
    }
  } catch (e) {
    console.log(`${e}`);
  }
}

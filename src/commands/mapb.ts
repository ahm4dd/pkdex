import { State } from "src/state.js";

export async function commandMapb(state: State): Promise<void> {
  try {
    const locations = await state.pokeapi.fetchLocations(
      state.prevLocationURL?.toString(),
    );
    state.nextLocationURL = locations.next;
    state.prevLocationURL = locations.previous ?? null;
    for (const location of locations.results) {
      console.log(location.name);
    }
  } catch (e) {
    console.log(`${e}`);
  }
}

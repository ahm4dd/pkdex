import { State } from "src/state.js";

export async function commandExit(state: State): Promise<void> {
  console.log("Closing the Pokedex... Goodbye!");
  state.rlInterface.close();
  process.exit(0);
}

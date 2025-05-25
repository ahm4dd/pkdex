import { State } from "src/state.js";

export function commandExit(state: State): void {
  console.log("Closing the Pokedex... Goodbye!");
  state.rlInterface.close();
  process.exit(0);
}

import { State } from "src/state.js";

export function commandHelp(state: State) {
  console.log();
  console.log("Welcome to the Pokedex!");
  console.log("Usage:");
  console.log();
  for (const command in state.commands) {
    console.log(
      `${state.commands[command].name}: ${state.commands[command].description}`,
    );
  }
  console.log();
}

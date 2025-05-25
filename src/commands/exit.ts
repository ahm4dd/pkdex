import { createCommand } from "./index.js";

export const exit = createCommand("exit", "Exit the Pokedex", () => {
  console.log("Closing the Pokedex... Goodbye!");
  process.exit(0);
});


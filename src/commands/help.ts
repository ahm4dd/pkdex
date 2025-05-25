import { createCommand } from "./index.js";
import { commands } from "./index.js";

export const help = createCommand("help", "Display all commands", () => {
  console.log("Usage: \n");

  const keys = Object.keys(commands) as (keyof typeof commands)[];

  for (let command of keys) {
    console.log(`${command}: ${commands[command].description}`);
  }
});

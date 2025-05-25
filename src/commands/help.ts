import { Command } from "./types.js";
import { getCommands, isCommand } from "./index.js";
export function commandHelp(): void {
  const allCommands = getCommands();
  console.log("Usage: \n");
  const commandKeys = Object.keys(getCommands()) as Command[];
  for (const commandKey of commandKeys) {
    console.log(`${commandKey}: ${allCommands[commandKey].description}`);
  }
}

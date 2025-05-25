import { CLICommand } from "./types.js";
import { getCommands } from "./index.js";
export function commandHelp(): void {
  let allCommands: Record<string, CLICommand> = getCommands();
  console.log("Usage: \n");
  for (let command in allCommands) {
    console.log(`${command}: ${allCommands[command].description}`);
  }
}

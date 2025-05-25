import { CLICommand } from "./types.js";
import { getCommands } from "./generalFunctions.js";
export function commandHelp(commands: Record<string, CLICommand>): void {
  let allCommands: Record<string, CLICommand> = getCommands();
  console.log("Usage: \n");
  for (let command in allCommands) {
    console.log(`${command}: ${allCommands[command].description}`);
  }
}

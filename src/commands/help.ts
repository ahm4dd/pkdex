import { CLICommand } from "./types.js";
import { getCommands } from "./generalFunctions.js";
export function helpCommand(): void {
  let commands: Record<string, CLICommand> = getCommands();
  console.log("Usage: \n");
  for (let command in commands) {
    console.log(`${command}: ${commands[command].description}`);
  }
}

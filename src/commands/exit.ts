import { exit } from "node:process";
import { CLICommand } from "./types.js";
export function commandExit(commands: Record<string, CLICommand>): void {
  console.log("Closing the Pokedex... Goodbye!");
  process.exit(0);
}

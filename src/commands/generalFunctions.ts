import { commandExit } from "./exit";
import { CLICommand } from "./types";

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "exit the pokedex",
      callback: commandExit,
    },
  };
}

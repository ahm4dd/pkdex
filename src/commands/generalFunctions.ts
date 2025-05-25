import { commandExit } from "./exit.js";
import { commandHelp } from "./help.js";
import { CLICommand } from "./types.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,
    },

    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
  };
}

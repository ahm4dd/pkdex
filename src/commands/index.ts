import { commandExit } from "./exit.js";
import { commandHelp } from "./help.js";
import { CLICommand } from "src/state.js";
import { commandMap } from "./map.js";

const commands: Record<string, CLICommand> = {
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

  map: {
    name: "map",
    description:
      "It displays the names of 20 location areas in the Pokemon world. Each subsequent call to map should display the next 20 locations, and so on. This will be how we explore the Pokemon world",
    callback: commandMap,
  },
};

export function getCommands(): Record<string, CLICommand> {
  return commands;
}

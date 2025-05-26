import { commandExit } from "./exit.js";
import { commandHelp } from "./help.js";
import { CLICommand } from "src/state.js";
import { commandMap } from "./map.js";
import { commandMapb } from "./mapb.js";

const commands: Record<string, CLICommand> = {
  exit: {
    name: "exit",
    description: "Exit the Pokedex.",
    callback: commandExit,
  },

  help: {
    name: "help",
    description: "Displays a help message.",
    callback: commandHelp,
  },

  map: {
    name: "map",
    description:
      "It displays the names of 20 location areas in the Pokemon world. Each subsequent call to map should display the next 20 locations, and so on.",
    callback: commandMap,
  },

  mapb: {
    name: "mapb",
    description:
      "It displays the names of the 20 previous location areas in the Pokemon world. Each subsequent call to the map should display the previous 20 locations.",
    callback: commandMapb,
  },
};

export function getCommands(): Record<string, CLICommand> {
  return commands;
}

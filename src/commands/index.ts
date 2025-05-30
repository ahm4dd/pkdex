import { commandExit } from "./exit.js";
import { commandHelp } from "./help.js";
import { CLICommand } from "src/state.js";
import { commandMap } from "./map.js";
import { commandMapb } from "./mapb.js";
import { commandExplore } from "./explore.js";
import { commandCatch } from "./catch.js";
import { commandInspect } from "./inspect.js";
import { commandPokedex } from "./pokedex.js";

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

  explore: {
    name: "explore",
    description:
      "Explores a specific location area and then returns the existing Pokemons in said location.",
    callback: commandExplore,
  },

  catch: {
    name: "catch",
    description: "Tries to catch a Pokemon. It either succeeds or fail",
    callback: commandCatch,
  },

  inspect: {
    name: "inspect",
    description:
      "Inspects and displays information about a Pokemon (Only caught Pokemons).",
    callback: commandInspect,
  },

  pokedex: {
    name: "pokedex",
    description: "Displays all caught Pokemons",
    callback: commandPokedex,
  },
};

export function getCommands(): Record<string, CLICommand> {
  return commands;
}

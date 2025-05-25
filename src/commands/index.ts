import { commandExit } from "./exit.js";
import { commandHelp } from "./help.js";
import type { Command, CLICommand } from "./types.js";

export const commands = {
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
} as const;

export function getCommands(): Record<Command, CLICommand> {
  return commands;
}

export function isCommand(input: string): input is keyof typeof commands {
  return input in commands;
}

import { commandExit } from "./exit.js";
import { commandHelp } from "./help.js";
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
};
export function getCommands() {
    return commands;
}

import { commandExit } from "./exit.js";
import { helpCommand } from "./help.js";
export function getCommands() {
    return {
        exit: {
            name: "exit",
            description: "Exit the Pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: helpCommand,
        },
    };
}

import { CLICommand } from "./types.js";
import { exit } from "./exit.js";
import { help } from "./help.js";

export function createCommand(name: string, description: string, callback: () => void): CLICommand {
    return {
        name,
        description,
        callback,
    };
}

export const commands = {
    exit,
    help,
} as const;


export function isCommand(input: string): input is keyof typeof commands {
    return input in commands;
}

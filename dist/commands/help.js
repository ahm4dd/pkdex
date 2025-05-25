import { getCommands } from "./generalFunctions.js";
export function helpCommand() {
    let commands = getCommands();
    for (let command in commands) {
        console.log(`${command}: ${commands[command].description}`);
    }
}

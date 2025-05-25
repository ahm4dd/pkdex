import { getCommands } from "./generalFunctions.js";
export function helpCommand(commands) {
    let allCommands = getCommands();
    console.log("Usage: \n");
    for (let command in allCommands) {
        console.log(`${command}: ${allCommands[command].description}`);
    }
}

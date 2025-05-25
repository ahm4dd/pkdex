import { getCommands } from "./index.js";
export function commandHelp(commands) {
    let allCommands = getCommands();
    console.log("Usage: \n");
    for (let command in allCommands) {
        console.log(`${command}: ${allCommands[command].description}`);
    }
}

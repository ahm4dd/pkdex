import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";
import { getCommands } from "./commands/generalFunctions.js";
const rl = createInterface({
    input: stdin,
    output: stdout,
    prompt: "Pokedex > ",
});
export function cleanInput(input) {
    let trimmedAndSplitted = input.trimEnd().trimStart().split(" ");
    let result = [];
    for (const input of trimmedAndSplitted) {
        if (input === "") {
            continue;
        }
        result.push(input);
    }
    return result;
}
export function startREPL() {
    console.log("Welcome to the Pokedex!");
    rl.prompt();
    rl.on("line", (input) => {
        input = input.toLowerCase().trim();
        if (input !== "") {
            if (input in getCommands()) {
                getCommands()[input].callback();
            }
            else {
                console.log("Unknown command");
            }
        }
        rl.prompt();
    });
}

import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";
const rl = createInterface({
    input: stdin,
    output: stdout,
    prompt: "pkdex > ",
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
    rl.prompt();
    rl.on("line", (input) => {
        if (input.trim() !== "") {
            console.log(`Your command was: ${cleanInput(input)[0]}`);
        }
        rl.prompt();
    });
}

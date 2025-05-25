import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";
import { getCommands } from "./commands/generalFunctions.js";
import { CLICommand } from "./commands/types";

const rl = createInterface({
  input: stdin,
  output: stdout,
  prompt: "Pokedex > ",
});

export function cleanInput(input: string): string[] {
  let trimmedAndSplitted: string[] = input.trimEnd().trimStart().split(" ");
  let result: string[] = [];

  for (const input of trimmedAndSplitted) {
    if (input === "") {
      continue;
    }
    result.push(input);
  }
  return result;
}

export function startREPL(): void {
  console.log("Welcome to the Pokedex!");
  rl.prompt();
  rl.on("line", (input: string): void => {
    input = input.toLowerCase().trim();
    if (input !== "") {
      if (input in getCommands()) {
        getCommands()[input].callback();
      } else {
        console.log("Unknown command");
      }
    }
    rl.prompt();
  });
}

import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";
import { State } from "./state.js";

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

export function startREPL(state: State): void {
  state.rlInterface.prompt();

  state.rlInterface.on("line", async (input) => {
    const words = cleanInput(input);
    if (words.length === 0) {
      state.rlInterface.prompt();
      return;
    }

    const commandName = words[0];

    const commands = state.commands;
    const cmd = commands[commandName];
    if (!cmd) {
      console.log(
        `Unknown command: "${commandName}". Type "help" for a list of commands.`,
      );
      state.rlInterface.prompt();
      return;
    }

    cmd.callback(state);

    state.rlInterface.prompt();
  });
}

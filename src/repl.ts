import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";
import { getCommands } from "./commands/index.js";
import { CLICommand } from "./commands/types.js";

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
  rl.prompt();

  rl.on("line", async (input) => {
    const words = cleanInput(input);
    if (words.length === 0) {
      rl.prompt();
      return;
    }

    const commandName = words[0];

    const commands = getCommands();
    const cmd = commands[commandName];
    if (!cmd) {
      console.log(
        `Unknown command: "${commandName}". Type "help" for a list of commands.`,
      );
      rl.prompt();
      return;
    }

    cmd.callback(commands);

    rl.prompt();
  });
}

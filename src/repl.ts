import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";

const rl = createInterface({
  input: stdin,
  output: stdout,
  prompt: "pkdex > ",
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
  rl.on("line", (input: string): void => {
    if (input.trim() !== "") {
      console.log(`Your command was: ${cleanInput(input)[0]}`);
    }
    rl.prompt();
  });
}

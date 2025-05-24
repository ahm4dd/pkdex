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

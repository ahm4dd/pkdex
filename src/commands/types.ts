import { commandExit } from "./exit.js";
import { commandHelp } from "./help.js";
import { commands } from "./index.js";
export type CLICommand = {
  name: string;
  description: string;
  callback: (commands: Record<string, CLICommand>) => void;
};

export type Command = keyof typeof commands;

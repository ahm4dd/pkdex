import { createInterface, type Interface } from "readline";
import { stdin, stdout } from "node:process";
import { getCommands } from "./commands/index.js";
import { PokeAPI, Pokemon } from "./pokeapi.js";
import { Cache } from "./pokecache.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => Promise<void>;
};

export type State = {
  rlInterface: Interface;
  commands: Record<string, CLICommand>;
  pokeapi: PokeAPI;
  nextLocationURL: URL | null;
  prevLocationURL: URL | null;
  cache: Cache;
  commandArg: string;
  caughtPokemons: Record<string, Pokemon>;
};

export function initState(): State {
  const state: State = {
    rlInterface: createInterface({
      input: stdin,
      output: stdout,
      prompt: "Pokedex > ",
    }),
    commands: getCommands(),
    pokeapi: new PokeAPI(),
    nextLocationURL: new URL("https://pokeapi.co/api/v2/location-area"),
    prevLocationURL: null,
    cache: new Cache(60000),
    commandArg: "",
    caughtPokemons: {},
  };
  return state;
}

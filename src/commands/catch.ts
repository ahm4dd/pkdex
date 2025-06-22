import { Pokemon } from "src/pokeapi.js";
import { State } from "src/state.js";

export type PokeBall = {
  name: string;
  catchRate: number; // Multiplier for catch success
  description: string;
  rarity: string;
};

export const POKEBALLS: Record<string, PokeBall> = {
  pokeball: {
    name: "Poké Ball",
    catchRate: 1.0,
    description: "A standard ball for catching Pokémon. Basic catch rate.",
    rarity: "Common",
  },
  greatball: {
    name: "Great Ball",
    catchRate: 1.5,
    description:
      "A high-performance ball with better catch rate than Poké Ball.",
    rarity: "Uncommon",
  },
  ultraball: {
    name: "Ultra Ball",
    catchRate: 2.0,
    description: "An ultra-high performance ball with excellent catch rate.",
    rarity: "Rare",
  },
  masterball: {
    name: "Master Ball",
    catchRate: 999, // Guaranteed catch
    description: "The ultimate ball that never fails to catch a Pokémon.",
    rarity: "Legendary",
  },
  premierball: {
    name: "Premier Ball",
    catchRate: 1.0,
    description:
      "A rare ball with same catch rate as Poké Ball but with prestige.",
    rarity: "Special",
  },
  timerball: {
    name: "Timer Ball",
    catchRate: 1.2,
    description: "Becomes more effective the longer the battle continues.",
    rarity: "Uncommon",
  },
};

function displayBallOptions(): void {
  console.log("\nAvailable Poke Balls:");
  console.log("+----+----------------+------------+--------+");
  console.log("| #  | Ball Type      | Rarity     | Rate   |");
  console.log("+----+----------------+------------+--------+");

  Object.entries(POKEBALLS).forEach(([key, ball], index) => {
    const number = (index + 1).toString().padStart(2);
    const name = ball.name.padEnd(14);
    const rarity = ball.rarity.padEnd(10);
    const rate = `${ball.catchRate}x`.padEnd(6);

    console.log(`| ${number} | ${name} | ${rarity} | ${rate} |`);
  });

  console.log("+----+----------------+------------+--------+");
  console.log("| 99 | View Ball Details                    |");
  console.log("|  0 | Cancel                               |");
  console.log("+----+--------------------------------------+");
}

function displayBallDetails(): void {
  console.log("\nPoke Ball Specifications:");
  console.log("=".repeat(70));

  Object.entries(POKEBALLS).forEach(([key, ball]) => {
    console.log(`\n${ball.name}`);
    console.log(`   Catch Rate: ${ball.catchRate}x`);
    console.log(`   Rarity: ${ball.rarity}`);
    console.log(`   Description: ${ball.description}`);
    console.log("-".repeat(50));
  });
}

function calculateCatchSuccess(
  pokemon: Pokemon,
  ballCatchRate: number,
): boolean {
  if (ballCatchRate >= 999) return true; // Master Ball always succeeds

  // Enhanced catch calculation
  const baseCatchRate = pokemon.base_experience || 100;
  const catchThreshold = baseCatchRate / (1.5 / ballCatchRate);
  const randomValue = Math.floor(Math.random() * baseCatchRate);

  return randomValue > catchThreshold;
}

function getUserChoice(state: State): Promise<string> {
  return new Promise((resolve) => {
    const handleInput = (input: string) => {
      state.rlInterface.off("line", handleInput);
      resolve(input.trim());
    };
    state.rlInterface.on("line", handleInput);
  });
}

export async function commandCatch(state: State): Promise<void> {
  if (state.commandArg === "") {
    console.log(
      "Error: You can't use the 'catch' command without specifying a Pokémon.",
    );
    console.log("Usage: catch <pokemon-name>");
    return;
  }

  try {
    console.log(`Searching for ${state.commandArg}...`);
    const pokemon: Pokemon = await state.pokeapi.fetchPokemon(state.commandArg);

    console.log(`\nWild ${pokemon.name.toUpperCase()} appeared!`);
    console.log(`   Level: ~${Math.floor(pokemon.base_experience / 10)}`);
    console.log(
      `   HP: ${pokemon.stats.find((s) => s.stat.name === "hp")?.base_stat || "Unknown"}`,
    );
    console.log(
      `   Types: ${pokemon.types.map((t) => t.type.name).join(", ")}`,
    );

    while (true) {
      displayBallOptions();
      console.log(
        `\nChoose your Poke Ball (1-${Object.keys(POKEBALLS).length}, 99 for details, 0 to cancel):`,
      );

      const choice = await getUserChoice(state);
      const choiceNum = parseInt(choice);

      if (choiceNum === 0) {
        console.log("Catch attempt cancelled. The wild Pokemon escaped!");
        return;
      }

      if (choiceNum === 99) {
        displayBallDetails();
        console.log("\nPress Enter to continue...");
        await getUserChoice(state);
        continue;
      }

      const ballKeys = Object.keys(POKEBALLS);
      if (choiceNum >= 1 && choiceNum <= ballKeys.length) {
        const selectedBallKey = ballKeys[choiceNum - 1];
        const selectedBall = POKEBALLS[selectedBallKey];

        console.log(`\nYou chose ${selectedBall.name}!`);
        console.log(`Throwing ${selectedBall.name} at ${pokemon.name}...`);

        // Simulate throw animation
        const dots = ["   ", ".  ", ".. ", "..."];
        for (let i = 0; i < 8; i++) {
          process.stdout.write(`\r${dots[i % 4]} Calculating...`);
          await new Promise((resolve) => setTimeout(resolve, 300));
        }
        process.stdout.write("\r                                    \r");

        const success = calculateCatchSuccess(pokemon, selectedBall.catchRate);

        if (success) {
          console.log(`${pokemon.name.toUpperCase()} was caught successfully!`);
          console.log(`${selectedBall.name} was effective!`);

          if (selectedBall.catchRate >= 999) {
            console.log("Master Ball never fails!");
          } else if (selectedBall.catchRate >= 2.0) {
            console.log("Excellent throw!");
          } else if (selectedBall.catchRate >= 1.5) {
            console.log("Great throw!");
          }

          state.caughtPokemons[pokemon.name] = pokemon;
          console.log(`${pokemon.name} was added to your Pokedex!`);
        } else {
          console.log(`Oh no! ${pokemon.name.toUpperCase()} broke free!`);
          console.log(`${pokemon.name} escaped back to the wild...`);

          if (selectedBall.catchRate < 1.5) {
            console.log(
              "Tip: Try using a Great Ball or Ultra Ball for better chances!",
            );
          }
        }

        return;
      } else {
        console.log("Invalid choice. Please select a valid option.");
      }
    }
  } catch (error) {
    console.log(`Error: Could not find Pokemon "${state.commandArg}".`);
    console.log("Make sure you spelled the name correctly and try again.");
  }
}

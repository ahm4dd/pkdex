import { cleanInput } from "./repl";
import { describe, expect, test } from "vitest";

describe.each([
  {
    input: "  hello  world  ",
    expected: ["hello", "world"],
  },
  {
    input: "     hey             ahmed",
    expected: ["hey", "ahmed"],
  },

  {
    input: " I                  love                    life",
    expected: ["I", "love", "life"],
  },
])("cleanInput($input)", ({ input, expected }) => {
  test(`Expected: ${expected}`, () => {
    const actual: string[] = cleanInput(input);
    // The `expect` and `toHaveLength` functions are from vitest
    // they will fail the test if the condition is not met
    expect(actual).toHaveLength(expected.length);
    for (const i in expected) {
      // likewise, the `toBe` function will fail the test if the values are not equal
      expect(actual[i]).toBe(expected[i]);
    }
  });
});

import { test, expect } from "vitest";
import { Cache } from "./pokecache.js";

test.concurrent.each([
  {
    key: "https://youtube.com",
    val: "hey",
    interval: 500, // 1/2 second
  },
  {
    key: "https://example.com",
    val: "hello",
    interval: 1000, // 1 second
  },
])("Test Caching $interval ms", async ({ key, val, interval }) => {
  const cache = new Cache(interval);

  cache.add(key, val);
  const cached = cache.get(key);
  expect(cached?.val).toBe(val);
  await new Promise((resolve) => setTimeout(resolve, interval + 100));

  const reaped = cache.get(key);
  expect(reaped?.val).toBe(undefined);

  cache.stopReapLoop();

  cache.stopReapLoop();
});

export type CacheEntry<T> = {
  createdAt: number;
  val: T;
};

export class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;
  #interval: number;

  constructor(interval: number) {
    this.#interval = interval;
    this.#startReapLoop();
  }

  add<T>(key: string, val: T) {
    this.#cache.set(key, { createdAt: Date.now(), val });
  }

  get<T>(key: string): CacheEntry<T> | undefined {
    return this.#cache.get(key) ?? undefined;
  }

  stopReapLoop() {
    clearInterval(this.#reapIntervalId);
    this.#reapIntervalId = undefined;
  }

  #reap() {
    try {
      const now = Date.now();
      for (const [key, value] of this.#cache.entries()) {
        if (value.createdAt < now - this.#interval) {
          this.#cache.delete(key);
        }
      }
    } catch (e) {
      console.log(`${e}`);
    }
  }

  #startReapLoop() {
    this.#reapIntervalId = setInterval(() => this.#reap(), this.#interval);
  }
}

export type CacheEntry<T> = {
  createdAt: number;
  val: T;
};

export class Cache {
  #cache = new Map<string, CacheEntry<any>>();

  function add<T>(key: string, val: T) {

  }

  function get<T>(key: string) : T | undefined {

  }
}

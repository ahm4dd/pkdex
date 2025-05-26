export class PokeAPI {
  private static readonly baseURL: string = "https://pokeapi.co/api/v2/";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const fullURL: string = pageURL ?? `${PokeAPI.baseURL}/location-area/`;

    const response: Response = await fetch(fullURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  }
  async fetchLocation(locationName: string): Promise<Location> {
    const fullURL: string = `${PokeAPI.baseURL}/location-area/${locationName}/`;
    const response: Response = await fetch(fullURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await response.json();
  }
}

type locationResult = {
  name: string;
  url: URL;
};

export type ShallowLocations = {
  count: number;
  next: URL;
  results: Record<number, locationResult>[];
};

export type Location = {
  id: number;
  name: string;
  location: locationResult;
};

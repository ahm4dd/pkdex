export class PokeAPI {
  private static readonly baseURL: string = "https://pokeapi.co/api/v2/";

  constructor() {}

  //async fetchLocations(pageURL?: string): Promise<ShallowLocations> {

  //}
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

export type ShallowLocations = {
  id: number;
  name: string;
};

export type Location = {
  id: number;
  name: string;
  location: ShallowLocations;
};

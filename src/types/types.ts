

export interface JokeResponse {
  joke?: string;
  value?: string;
}

export type WeatherResponse = string;

export interface RatedJoke {
  joke: string;
  score: number | null;
  date: string;
}

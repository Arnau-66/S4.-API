

export interface JokeResponse {
  joke?: string;
  value?: string;
}

export type WeatherResponse = string;

export interface RatedJoke {
  text: string;
  score: number | null;
  date: string;
}

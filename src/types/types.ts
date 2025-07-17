

export interface JokeResponse {
  joke?: string;
  value?: string;
}

export interface RatedJoke {
  joke: string;
  score: number | null;
  date: string;
}

export interface WttrAPIResponse {
  current_condition: {
    temp_C: string;
    weatherDesc: { value: string }[];
  }[];
  nearest_area: {
    areaName: { value: string }[];
    country: { value: string }[];
  }[];
}


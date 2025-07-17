


export type APIConfig = {
  url: string;
  headers: Record<string, string>;
  type: "json" | "text";
};

export const APIs: { [key: string]: APIConfig } = {
  dadJoke: {
    url: "https://icanhazdadjoke.com/",
    headers: { Accept: "application/json" },
    type: "json"
  },
  chuckNorris: {
    url: "https://api.chucknorris.io/jokes/random",
    headers: {},
    type: "json"
  },
  weather: {
    url: "https://wttr.in/Barcelona?format=j1",
    headers: {},
    type: "json"
  }
};

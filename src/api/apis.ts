


export const APIs = {
  dadJoke: {
    url: "https://icanhazdadjoke.com/",
    headers: { Accept: "application/json" },
    type: "json" as const
  },
  chuckNorris: {
    url: "https://api.chucknorris.io/jokes/random",
    headers: {},
    type: "json" as const
  },
  weather: {
    url: "https://wttr.in/?format=3",
    headers: {},
    type: "text" as const
  }
};

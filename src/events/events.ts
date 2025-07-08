

import { APIs } from "../api/apis";
import { fetchData } from "../api/fetchData";
import { updateText } from "../dom/updateDOM";
import { JokeResponse } from "../types/types";

export function attachJokeEvent(button: HTMLButtonElement): void {
  button.addEventListener("click", async () => {
    try {
      const randomAPI = Math.random() < 0.5 ? APIs.dadJoke : APIs.chuckNorris;
      const jokeData: JokeResponse = await fetchData(randomAPI.url, randomAPI.headers, randomAPI.type);
      const joke = jokeData.joke || jokeData.value || "No joke found";
      updateText("jokeDisplay", joke);
    } catch (err) {
      updateText("jokeDisplay", "Error loading joke");
      console.error(err);
    }
  });
}

export function attachWeatherEvent(button: HTMLButtonElement): void {
  button.addEventListener("click", async () => {
    try {
      const weather = await fetchData(APIs.weather.url, APIs.weather.headers, APIs.weather.type);
      updateText("weatherDisplay", weather);
    } catch (err) {
      updateText("weatherDisplay", "Error loading weather");
      console.error(err);
    }
  });
}

import { APIs } from "../api/apis.js";
import { fetchData } from "../api/fetchData.js";
import { updateText } from "../dom/updateDOM.js";
import { saveJoke } from "../jokes/jokes.js";
import type { JokeResponse } from "../types/types.js";

export function attachJokeEvent(button: HTMLButtonElement): void {
  button.addEventListener("click", async () => {
    try {
      let randomAPI = Math.random() < 0.5 ? APIs.dadJoke : APIs.chuckNorris;
      let jokeData: JokeResponse = await fetchData(
        randomAPI.url,
        randomAPI.headers,
        randomAPI.type
      );

      let joke = jokeData.joke || jokeData.value || "No joke found";
      updateText("jokeDisplay", joke);
      saveJoke(joke);
    } catch (error) {
      updateText("jokeDisplay", "Error loading joke");
      console.error(error);
    }
  });
}

export function displayWeatherOnLoad(): void {
  window.addEventListener("DOMContentLoaded", async () => {
    try {
      const weather = await fetchData(
        APIs.weather.url,
        APIs.weather.headers,
        APIs.weather.type
      );

      const weatherBox = document.getElementById("weatherInfo");
      if (weatherBox) {
        const trimmedWeather = weather.split(": ").pop();
        weatherBox.innerHTML = `<span class="weather-text">${trimmedWeather}</span>`;
      }
    } catch (error) {
      const weatherBox = document.getElementById("weatherInfo");
      if (weatherBox) {
        weatherBox.textContent = "Error loading weather";
      }
      console.error(error);
    }
  });
}

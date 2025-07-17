
import { APIs, fetchData } from "../api/index.js";
import { updateText } from "../dom/index.js";
import { saveJoke } from "../jokes/jokes.js";
import type { JokeResponse, WttrAPIResponse } from "../types/types.js";

export function attachJokeEvent(button: HTMLButtonElement): void {
  button.addEventListener("click", async () => {
    try {
      let randomAPI = Math.random() < 0.5 ? APIs.dadJoke : APIs.chuckNorris;
      let data = await fetchData(
        randomAPI.url,
        randomAPI.headers,
        randomAPI.type
      );

      if (typeof data === "object" && data !== null && ("joke" in data || "value" in data)) {

        const jokeData = data as JokeResponse;
        const joke = jokeData.joke || jokeData.value || "No joke found";

        updateText("jokeDisplay", joke);
        saveJoke(joke);

        } else {
          updateText("jokeDisplay", "Invalid response format");
        };

    } catch (error) {
      updateText("jokeDisplay", "Error loading joke");
      console.error(error);
    }
  });
}


export function displayWeatherOnLoad(): void {
  window.addEventListener("DOMContentLoaded", async () => {
    try {
      const data = await fetchData(
        APIs.weather.url,
        APIs.weather.headers,
        APIs.weather.type
      );

      const weatherBox = document.getElementById("weatherInfo");

      if (
        weatherBox &&
        typeof data === "object" &&
        data !== null &&
        "current_condition" in data &&
        "nearest_area" in data
      ) {
        const weather = data as WttrAPIResponse;

        const temp = weather.current_condition[0].temp_C;
        const description = weather.current_condition[0].weatherDesc[0].value;
        const city = weather.nearest_area[0].areaName[0].value;
        const country = weather.nearest_area[0].country[0].value;

        weatherBox.innerHTML = `
          <span class="weather-text">
            ${city}, ${country} - ${temp}°C, ${description}
          </span>
        `;
      } else if (weatherBox) {
        weatherBox.textContent = "Unexpected response format";
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



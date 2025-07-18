
import { APIs, fetchData } from "../api/index.js";
import { updateText } from "../dom/index.js";
import { saveJoke } from "../jokes/jokes.js";
import type { JokeResponse, WttrAPIResponse } from "../types/types.js";
import { weatherEmojis } from "../utils/weatherEmogiMap.js";


export async function loadRandomJoke(): Promise<void> {
  try {
    const randomAPI = Math.random() < 0.5 ? APIs.dadJoke : APIs.chuckNorris;
    const data = await fetchData(
      randomAPI.url,
      randomAPI.headers,
      randomAPI.type
    );

    if (
      typeof data === "object" &&
      data !== null &&
      ("joke" in data || "value" in data)
    ) {
      const jokeData = data as JokeResponse;
      const joke = jokeData.joke || jokeData.value || "No joke found";
      updateText("jokeDisplay", joke);
      saveJoke(joke);
    } else {
      updateText("jokeDisplay", "Invalid response format");
    }
  } catch (error) {
    updateText("jokeDisplay", "Error loading joke");
    console.error(error);
  }
}

export function attachJokeEvent(button: HTMLButtonElement): void {
  button.addEventListener("click", loadRandomJoke);
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

      if (weatherBox && typeof data === "object" && data !== null && "current_condition" in data && "nearest_area" in data) {

        const weather = data as WttrAPIResponse;
        
        const temp = weather.current_condition[0].temp_C;
        const rawDescription = weather.current_condition[0].weatherDesc[0].value;
        const emoji = weatherEmojis[rawDescription] || "🌈";
        const description = `${emoji}`;
        const city = weather.nearest_area[0].areaName[0].value;
        const country = weather.nearest_area[0].country[0].value;

        weatherBox.innerHTML = `
          <span class="weather-text">
          <br>
           ${temp}°C, ${description}<br>
            ${city}, ${country}
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



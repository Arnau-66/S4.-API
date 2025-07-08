


import { APIs } from './api/apis';
import { fetchData } from './api/fetchData';
import { updateText } from './dom/updateDOM';
import { JokeResponse } from './types/types';

const jokeBtn = document.getElementById("loadJoke") as HTMLButtonElement;
const weatherBtn = document.getElementById("loadWeather") as HTMLButtonElement;

jokeBtn.addEventListener("click", async () => {
  try {
    
    const randomAPI = Math.random() < 0.5 ? APIs.dadJoke : APIs.chuckNorris;
    const jokeData: JokeResponse = await fetchData(randomAPI.url, randomAPI.headers, randomAPI.type);

    let joke = jokeData.joke || jokeData.value || "No joke found";

    updateText("jokeDisplay", joke);

  } catch (error) {
    updateText("jokeDisplay", "Error loading joke");
    console.error(error);
  }
});

weatherBtn.addEventListener("click", async () => {
  try {
    const weatherData = await fetchData(APIs.weather.url, APIs.weather.headers, APIs.weather.type);

    updateText("weatherDisplay", weatherData);
    
  } catch (error) {
    updateText("weatherDisplay", "Error loading weather");
    console.error(error);
  }
});

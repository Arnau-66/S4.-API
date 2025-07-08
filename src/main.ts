import { attachJokeEvent, attachWeatherEvent } from './events/events.js';

const jokeBtn = document.getElementById("loadJoke") as HTMLButtonElement;
const weatherBtn = document.getElementById("loadWeather") as HTMLButtonElement;

attachJokeEvent(jokeBtn);
attachWeatherEvent(weatherBtn);

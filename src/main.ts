


import { attachJokeEvent, displayWeatherOnLoad, rateJoke } from './events/events.js';

const jokeBtn = document.getElementById("loadJoke") as HTMLButtonElement;

attachJokeEvent(jokeBtn);
displayWeatherOnLoad();

(window as any).rateJoke = rateJoke;

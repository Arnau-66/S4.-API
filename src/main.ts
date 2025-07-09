import { attachJokeEvent, displayWeatherOnLoad } from './events/events.js';

const jokeBtn = document.getElementById("loadJoke") as HTMLButtonElement;

attachJokeEvent(jokeBtn);
displayWeatherOnLoad();


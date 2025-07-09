

import { attachJokeEvent, displayWeatherOnLoad } from "./events/index.js";
import { rateJoke } from "./jokes/index.js";

displayWeatherOnLoad();

const jokeBtn = document.getElementById("loadJoke") as HTMLButtonElement;
attachJokeEvent(jokeBtn);

(window as any).rateJoke = rateJoke;

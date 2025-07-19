

import { attachJokeEvent, displayWeatherOnLoad, loadRandomJoke } from "./events/index.js";
import { rateJoke } from "./jokes/index.js";

displayWeatherOnLoad();

const jokeBtn = document.getElementById("loadJoke") as HTMLButtonElement;
attachJokeEvent(jokeBtn);

window.rateJoke = rateJoke;

document.addEventListener("DOMContentLoaded", () => {
  const jokeButton = document.getElementById("loadJoke") as HTMLButtonElement;

  if (jokeButton) attachJokeEvent(jokeButton);

  displayWeatherOnLoad();
  loadRandomJoke();

});
import type { RatedJoke } from "../types/types.js";
import { renderRatedJokes, updateJokeCounter } from "../dom/index.js";


let currentJoke = "";
const ratedJokes: RatedJoke[] = [];

export function saveJoke(joke: string): void {
  currentJoke = joke;
  ratedJokes.push({ joke, score: null, date: new Date().toISOString() });

  updateJokeCounter(ratedJokes.length);
}

export function rateJoke(score: 1 | 2 | 3): void {
  let lastIndex = ratedJokes.length - 1;
  if (lastIndex >= 0) {
    ratedJokes[lastIndex].score = score;
    console.log("Joke rated:", ratedJokes[lastIndex]);

    renderRatedJokes(ratedJokes);
  }
}

export function getRatedJokes(): RatedJoke[] {
  return ratedJokes;
}



import type { RatedJoke } from "../types/types.js";
import  { renderRatedJokes } from "../dom/updateDOM.js";

let currentJoke = "";
const ratedJokes: RatedJoke[] = [];

export function saveJoke(joke: string): void {
  currentJoke = joke;
  ratedJokes.push({ joke, score: null, date: new Date().toISOString() });
}

export function rateJoke(score: number): void {
  const lastIndex = ratedJokes.length - 1;
  if (lastIndex >= 0) {
    ratedJokes[lastIndex].score = score;
    console.log("Joke rated:", ratedJokes[lastIndex]);

    renderRatedJokes(ratedJokes);
  }
}

export function getRatedJokes(): RatedJoke[] {
  return ratedJokes;
}

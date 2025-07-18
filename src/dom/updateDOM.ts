
import type { RatedJoke } from "../types/types.js";

export function updateText(id: string, content: string): void {

  let element = document.getElementById(id);

  if (element) {
    element.textContent = content;
  } else {
    console.warn(`Elemento con id "${id}" no encontrado.`);
  }
}

export function renderRatedJokes(ratedJokes: RatedJoke[]): void {

  const list = document.getElementById("historyList");


  if (list) {

    const scoredJokes = ratedJokes.filter(joke => joke.score !== null);

    list.innerHTML = scoredJokes.map(joke =>`<li>${joke.joke} - ⭐ ${joke.score}</li>`).join('');

  } else {
    console.warn('Elemento con id "jokeHistory" no encontrado.');
  }
}

export function updateJokeCounter(count: number): void {

  const counter = document.getElementById("jokeCounter");
  
  if (counter) {
    counter.textContent = count.toString();
  } else {
    console.warn('Elemento con id "jokeCounter" no encontrado.');
  }
}

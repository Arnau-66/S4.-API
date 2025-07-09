
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
  const list = document.getElementById("jokeHistory");
  if (list) {
    list.innerHTML = ratedJokes.map(joke =>
      `<li>${joke.joke} - ⭐ ${joke.score ?? "Not rated"}</li>`
    ).join('');
  } else {
    console.warn('Elemento con id "jokeHistory" no encontrado.');
  }
}
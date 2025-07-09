

import type { RatedJoke } from './types/types';

export const ratedJokes: RatedJoke[] = [];

export function saveRatedJoke(text: string, score: number | null): void {
  ratedJokes.push({
    text,
    score,
    date: new Date().toISOString()
  });
}

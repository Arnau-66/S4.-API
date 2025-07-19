

export {};

declare global {
  interface Window {
    rateJoke: (score: 1 | 2 | 3) => void;
  }
}

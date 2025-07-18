# 🎯 Sprint 4 API Integration with TypeScript

This repository represents the **final version** of the Sprint 4 project for the IT Academy Bootcamp.

---

## 🌐 Project Description

The goal of this web application is to:

- Display a **random joke**, selected between:
  - [icanhazdadjoke](https://icanhazdadjoke.com/)
  - [Chuck Norris Jokes API](https://api.chucknorris.io/)
- Display the **current weather**, including:
  - Temperature
  - Weather icon
  - City and country
  - Data from [wttr.in](https://wttr.in/?format=j1)
- Use a **single, centralized fetch function** to call all APIs.
- Allow **rating jokes** with emoji-based scoring (1–3).
- Track and **store a list of rated jokes** with score and date.
- Show a **total jokes counter**.

---

## 🧩 Features

- 🎲 **Random joke selector** between Dad Joke and Chuck Norris APIs.
- 💬 **Emoji-based rating system** for jokes (😐 1, 🙂 2, 😂 3).
- 📜 **Rated jokes history** displayed on screen.
- 🧮 **Joke counter** updates in real time.
- ☁️ **Current weather** display with icon and location.
- 📦 **Centralized fetch logic** via `fetchData()` function.
- 🧱 **Fully modular codebase**, including:
  - `api` – API configuration and fetch logic
  - `jokes` – Scoring, saving and joke state
  - `dom` – DOM update functions
  - `events` – Event listeners and logic triggers
  - `utils` – Emoji mapping for weather
- ⚠️ **Error handling** with `try/catch`.
- 🧪 **Type safety** with custom types (`JokeResponse`, `RatedJoke`, etc.).

---

## 📘 Learning Objectives

- Master the setup and configuration of a **TypeScript project**.
- Use `fetch()` to consume **public APIs** securely and efficiently.
- Handle both **JSON and nested object** API responses.
- Apply **modular architecture** and proper file separation.
- Manipulate the DOM using **TypeScript functions** and **typed parameters**.

---

## 🛠️ Technologies Used

- **TypeScript**
- **HTML5 / CSS3**
- **JavaScript (compiled from TS)**
- **Bootstrap (basic layout help)**
- **APIs Used**:
  - [`icanhazdadjoke`](https://icanhazdadjoke.com/)
  - [`Chuck Norris API`](https://api.chucknorris.io/)
  - [`wttr.in`](https://wttr.in/?format=j1)

---

## 📁 Project Structure

```plaintext
sprint4-api-project/
├── assets/
│   └── png/                     # Decorative PNGs (blobs, title)
├── dist/                        # Compiled JavaScript files
├── src/                         # TypeScript source code
│   ├── api/
│   │   └── apis.ts              # API URLs, headers, types
│   ├── dom/
│   │   └── updateDOM.ts         # updateText, renderRatedJokes, updateCounter
│   ├── events/
│   │   └── events.ts            # Event listeners for joke & weather
│   ├── jokes/
│   │   └── jokes.ts             # saveJoke, rateJoke, getRatedJokes
│   ├── utils/
│   │   └── weatherEmojiMap.ts   # Mapping weather to emojis
│   ├── types/
│   │   └── types.ts             # TypeScript interfaces & types
│   └── main.ts                  # Entry point
├── styles/
│   ├── bootstrap.min.css        # Bootstrap (optional)
│   └── styles.css               # Custom design styles
├── index.html                   # Main HTML file
├── tsconfig.json                # TypeScript config
├── package.json                 # Project dependencies and scripts
```


## 📌 Notes

The `main` branch contains the **final stable version** of the project.  
Development and feature testing were managed in separate branches (`develop`, `feature/jokes`, etc.).

---

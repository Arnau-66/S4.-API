# Sprint 4 API Integration with TypeScript

This repository is the **first version** of the Sprint 4 project for the IT Academy Bootcamp. 

## 🌐 Project Description

The goal of the project is to build a small web application that:

- Displays a **random joke**, chosen between:
  - [icanhazdadjoke](https://icanhazdadjoke.com/)
  - [Chuck Norris Jokes API](https://api.chucknorris.io/)
- Displays the **current weather** using:
  - [wttr.in](https://wttr.in/?format=3)
- Uses a **single centralized fetch function** to handle all API requests.
- Updates the **DOM dynamically** with the results.
- Is fully written in **TypeScript**, compiled into JavaScript.

## 📋 Features

- 🎲 Random joke selector between two APIs.
- ☁️ Weather forecast fetched from a text-based API.
- 🔀 Centralized fetch logic using `fetchData()` function.
- 🧱 Modular codebase:
  - `main.ts` – Event handling and logic flow
  - `api.ts` – API calling logic
  - `dom.ts` – DOM update functions
- ✅ Full error handling with `try/catch`
- 💡 Clear project structure and separation of concerns

## 💼 Learning Objectives

- Learn how to set up and structure a **TypeScript project** from scratch.
- Practice using **`fetch()`** to call public APIs.
- Understand how to handle both **JSON and plain text** API responses.
- Apply **modular design** principles and **DOM manipulation** in TypeScript.

## 🛠️ Technologies Used

- **TypeScript**
- **HTML5 / CSS3**
- **JavaScript (compiled from TS)**
- **APIs**:
  - `https://icanhazdadjoke.com/`
  - `https://api.chucknorris.io/`
  - `https://wttr.in/?format=3`

## 📁 Project Structure

```plaintext
sprint4-api-project/
├── src/
│   ├── main.ts          // Application entry point
│   ├── api.ts           // Fetch logic for APIs
│   ├── dom.ts           // DOM manipulation helpers
├── dist/                // Compiled JavaScript output
├── index.html           // App layout
├── styles.css           // Basic styling
├── tsconfig.json        // TypeScript config
├── package.json         // Project dependencies
```

## 🚀 Deployment

To run the project locally:

```bash
# Compile TypeScript
npx tsc

# Open index.html in your browser
```

## 📌 Notes

This project is part of the **Sprint 4 assignment** and represents a clean and functional solution based on the official requirements.  
The `main` branch will contain the **final stable version**.

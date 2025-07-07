# 🚧 Development Branch - Sprint 4 API Project

This branch contains the active development of the Sprint 4 project from IT Academy. The goal is to fetch and display data from multiple APIs using TypeScript in a modular and scalable way.

## 📌 Exercise Requirements

- Initialize a TypeScript project from scratch.
- Build a webpage that displays:
  - A random joke from two APIs:
    - https://icanhazdadjoke.com/
    - https://api.chucknorris.io/jokes/random
  - Weather info from https://wttr.in/?format=3
- Use a single centralized function for API calls.
- Structure code modularly using:
  - `main.ts`
  - `api.ts`
  - `dom.ts`
  - `types.ts`

## 📁 Folder Structure

```
src/
├── api/
│   ├── apis.ts          # Stores all API endpoints and headers
│   └── fetchData.ts     # Generic fetch function
├── dom/
│   └── updateDOM.ts     # DOM manipulation functions
├── types/
│   └── types.ts         # Interfaces and type declarations
└── main.ts              # Application logic and event listeners

public/
├── index.html
├── styles.css
└── dist/                # Compiled JS output
```

## ✅ Implemented Features

- ✅ Typed and modularized fetch function.
- ✅ Dynamic random joke selection from two APIs.
- ✅ Weather data fetched and displayed.
- ✅ DOM updated based on response.
- ✅ Errors handled via try...catch blocks.
- ✅ Type definitions for consistent response handling.

## 🧰 Technologies Used

- TypeScript
- HTML / CSS
- Fetch API (vanilla)
- Node.js + npm
- `tsconfig.json` for compiler setup

## 🧪 Setup & Compilation

```bash
npm init -y
npm install typescript --save-dev
npx tsc --init

npx tsc         # Compiles TS to JS
npx tsc -w      # Watches for changes
```

## 🔄 Development Flow

All features are built in separate `feature/*` branches and merged into `develop` when complete and tested. The `main` branch only receives fully stable releases.

## 📌 TODO

- [ ] Add visual feedback during data fetching
- [ ] Improve error messages for users
- [ ] Style the layout with CSS enhancements

## 🔁 Merge Strategy

- `feature/api-caller` → `develop`
- `feature/dom-handler` → `develop`
- `feature/types-models` → `develop`
- `develop` → `main` (final tested product)

---

**This branch is for staging and testing features before production. Do not deploy directly from this branch.**

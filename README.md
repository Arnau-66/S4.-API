# 🚧 Develop Branch - Sprint 4 API Project

This project is part of Sprint 4 of the IT Academy Bootcamp. It consists of creating a web application that fetches data from public APIs using TypeScript, with a modular architecture and development best practices.

---

## 📌 Exercise Goals

- Set up a project from scratch using TypeScript.
- Use `fetch` to call multiple public APIs.
- Modularize the code into separate files (API, DOM, types, events, main logic).
- Properly type the data returned by each API.
- Display on screen:
  - A random joke (from two different APIs).
  - Current weather information.

---

## 📁 Folder Structure

```
sprint4-api-project/
├── src/                         # Source code in TypeScript
│   ├── api/                     # API logic and configuration
│   │   ├── apis.ts              # URLs, headers, and response types for each API
│   │   └── fetchData.ts         # Generic function for API calls
│   ├── dom/                     # DOM manipulation logic
│   │   └── updateDOM.ts         # Utility to inject content into the HTML
│   ├── events/                  # Event handlers and button listeners
│   │   └── events.ts            # Click event functions
│   ├── types/                   # Data models
│   │   └── types.ts             # Interfaces and custom types
│   └── main.ts                  # Entry point of the application
├── dist/                        # Compiled output (JS)
├── styles/                      # Styling folder
│   ├── bootstrap.min.css        # Bootstrap locally installed via npm and copied
│   └── styles.css               # Optional: custom styles
├── index.html                   # Main HTML layout
├── package.json                 # Project dependencies and scripts
├── tsconfig.json                # TypeScript compiler configuration
└── .gitignore                   # Ignore node_modules and dist
```

---

## ✅ Implemented Features

- ✅ Generic API caller function using `fetch`
- ✅ Random joke from either Dad Joke or Chuck Norris APIs
- ✅ Current weather information from wttr.in
- ✅ Type-safe responses using TypeScript interfaces
- ✅ Fully modular structure (API, DOM, events, types, logic)
- ✅ Error handling with `try...catch`
- ✅ User interface using Bootstrap (manually downloaded CSS)

---

## 🧰 Technologies Used

- TypeScript
- HTML / Bootstrap (local installation)
- Fetch API
- Node.js + npm

---

## 🧪 Setup & Compilation

```bash
npm install            # Install dependencies (TypeScript)
npx tsc --init         # Create tsconfig.json (if not done already)
npx tsc                # Compile TypeScript once
npx tsc -w             # Enable watch mode for auto-compilation
```

To stop watch mode: use `Ctrl + C`

Open `index.html` directly in the browser or use Live Server.

---

## 🔄 Branching Workflow

All features are built in separate `feature/*` branches and merged into `develop` when complete and tested. The `main` branch receives only the final working version.

```
main → develop → feature/api-caller
                       ↘ feature/dom-handler
                       ↘ feature/types-models
                       ↘ feature/events
```

---

## 🚀 Deployment

Once all features are tested and merged into `develop`, the final product is merged into `main` for delivery.

---

## 📌 Future Improvements

-

---

**Note:** This README reflects the final implementation logic from `develop`. All modules are working and compiled under `/dist`, and the `index.html` is linked properly with locally stored Bootstrap and JS logic.


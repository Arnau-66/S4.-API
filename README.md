# 🔧 Feature: API Caller

This branch contains the core logic for handling **external API requests** in the project. It defines a **unified and reusable asynchronous function** that handles all types of API calls (JSON or plain text) and includes proper error handling.

## 📌 Purpose of this Feature

The goal of this branch is to abstract the logic of `fetch()` into a single utility function called `fetchData()`. This keeps the code **modular, readable, and maintainable**, allowing other parts of the application (like `main.ts`) to focus on what to do with the data, not how to retrieve it.

## 🧠 What does `fetchData()` do?

- Accepts a **URL** and optional **headers**.
- Makes an asynchronous `fetch()` request.
- Checks if the response is OK.
- Automatically detects the content type:
  - If it's JSON, it parses and returns it.
  - If it's plain text, it returns it as a string.
- Throws custom errors if the response is invalid or fails.

## 🧠 TypeScript Concepts Used

- `async/await`: to handle asynchronous flow cleanly.
- `Record<string, string>`: to type HTTP headers as key-value pairs.
- `Promise<any>`: to indicate that this function returns a promise of any type (either string or object).
- `export`: to allow modularity and code reuse.

## ✅ Benefits of This Feature

- Avoids repeating fetch logic everywhere.
- Makes API handling more robust and secure.
- Easy to extend or adapt (e.g. add token headers, log errors, etc.).
- Keeps the `main.ts` logic focused on **UI updates**, not **network logic**.


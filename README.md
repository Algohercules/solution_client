# 100xSolutions Education

A curated directory of AI tools across **Video**, **Audio**, **Image**, and **Chatbots** — built with the MERN stack (MongoDB-ready Express + React + Node).

## Features

- **Categories**: Video generation, Audio generation, Image generation, Chatbots
- **Tool listings**: Click a category to see tools; click a tool to open its official website
- **UI**: Dark blue/black theme, floating background, shadows, animations, interactive buttons, navbar, footer

## Tech Stack

- **Frontend**: React (Vite), React Router, Framer Motion
- **Backend**: Express.js (API for categories and tools)
- **Data**: Static JSON (MongoDB can be added later)

## Quick Start

1. **Install dependencies** (from project root):
   ```bash
   npm run install:all
   ```

2. **Start the API** (terminal 1):
   ```bash
   npm run server
   ```
   API runs at http://localhost:5000

3. **Start the frontend** (terminal 2):
   ```bash
   npm run client
   ```
   App runs at http://localhost:3000

The frontend works without the server (uses fallback static data) if you only run `npm run client`.

## Project Structure

```
solutions_1/
├── client/          # React (Vite) frontend
│   └── src/
│       ├── components/   # Navbar, Footer, FloatingBackground, CategoryCard, ToolCard
│       ├── pages/        # Home, Categories, CategoryPage
│       └── data/         # Fallback tool data
├── server/          # Express API
│   ├── data/tools.js
│   └── index.js
└── package.json
```

## API

- `GET /api/categories` — List all categories
- `GET /api/categories/:slug/tools` — List tools for a category (e.g. `video-generation`, `chatbots`)

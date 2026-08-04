# Finance Tracker

A simple finance tracker built with React and Vite. Track your income and expenses, view your total balance, and manage transactions — all backed by a local mock API.

## Features

- 📊 **Dashboard** — total balance, total income, and total expenses at a glance
- 📝 **Add transactions** — record income or expenses with amount, category, date, and note
- ✏️ **Edit transactions** — update any existing transaction, with the form pre-filled from its current data
- 🗑️ **Delete transactions** — remove a transaction directly from the list
- 📅 **Date picker** — pick dates via `react-day-picker` instead of typing them
- ⏳ **Loading & error states** — clear feedback while data is fetching or if a request fails


## Getting Started

### 1. Install dependencies

\`\`\`bash
npm install
\`\`\`

### 2. Start the mock API server

This app uses `json-server` to serve `db.json` as a REST API.

\`\`\`bash
npm run server
\`\`\`

Runs at `http://localhost:8000`.

### 3. Start the dev server

In a separate terminal:

\`\`\`bash
npm run dev
\`\`\`

Runs at `http://localhost:5173` (default Vite port).

Both the API server and the dev server need to be running at the same time for the app to work.

## Available Scripts

| Command           | Description                              |
|--------------------|-------------------------------------------|
| `npm run dev`       | Start the Vite dev server                 |
| `npm run build`     | Build the app for production              |
| `npm run preview`   | Preview the production build locally      |
| `npm run server`    | Start json-server on port 8000            |
| `npm run lint`      | Run ESLint                                |

## Data Shape

Each transaction in `db.json` follows this shape:

\`\`\`json
{
  "id": "1",
  "type": "expense",
  "amount": 45.99,
  "category": "Food",
  "date": "2026-07-20",
  "note": "Dinner at restaurant"
}
\`\`\`

- `type` — `"income"` or `"expense"`
- `amount` — stored as a number, not a string

## Notes

- Balance is calculated as `totalIncome - totalExpenses`.
- New transactions are validated on submit — amount, type, category, date, and note are all required.
- The Add and Edit forms share the same component; it pre-fills and switches to update mode when a transaction (with an `id`) is passed in.s share the same component; it pre-fills and switches to update mode when a transaction (with an `id`) is passed in.

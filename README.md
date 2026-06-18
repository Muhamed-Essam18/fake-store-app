# Fake Store SPA - Internship Task Project

This project is built as an internship assessment task to demonstrate frontend fundamentals and practical React skills.

It is a single-page application that fetches product data from the Fake Store API, displays products in reusable cards, and supports real-time search and category filtering.

## Task Objective

Build a responsive and user-friendly SPA that demonstrates:

- Reusable component-based architecture
- API data fetching with loading and error handling
- Real-time search and category filtering
- Clean, maintainable code and optimized rendering patterns

## Live Data Source

- API: https://fakestoreapi.com/products

## Implemented Features

- Responsive layout for desktop, tablet, and mobile
- Product listing with reusable product cards
- Real-time search by product title
- Multi-select category filtering
- Empty state when no products match search/filter
- Loading spinner while fetching data
- Graceful API error state handling
- Visual polish with consistent iconography and hover transitions

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Lucide React icons
- Native Fetch API

## Project Structure

```text
app/
	layout.tsx
	page.tsx
components/
	CategoryFilter.tsx
	LoadingSpinner.tsx
	ProductCard.tsx
	SearchBar.tsx
hooks/
	useProducts.ts
services/
	products.ts
types/
	product.ts
```

## How to Run Locally

1. Install dependencies

```bash
npm install
```

2. Start development server

```bash
npm run dev
```

3. Open in browser

http://localhost:3000

## Available Scripts

- npm run dev: run development server
- npm run build: build production bundle
- npm run start: run production server
- npm run lint: run lint checks

## How Requirements Were Addressed

1. Responsive UI and reusable components
- UI is split into SearchBar, CategoryFilter, ProductCard, and LoadingSpinner.
- Tailwind CSS is used for responsive spacing, typography, and grid behavior.

2. Data fetching and state management
- Data is fetched on mount in useProducts via useEffect.
- Local state (useState) manages products, loading, error, search text, and selected categories.

3. Real-time interactivity
- Search updates results as user types.
- Category filtering is interactive and supports multiple selections.
- Empty state message appears when no results are found.

4. Optimization and clean code
- Filtering and category extraction use useMemo to reduce unnecessary recalculations.
- Logic is separated across hooks, services, components, and types.

## Challenges and Solutions

- Challenge: Avoiding unnecessary list recomputation during search/filter updates.
	Solution: Wrapped computed lists in useMemo for stable and efficient updates.

- Challenge: Maintaining visual consistency with varying product title lengths.
	Solution: Applied consistent title height and line clamping in product cards.

- Challenge: Keeping UI responsive while preserving a polished theme.
	Solution: Used utility-first responsive classes and reusable components for consistent behavior across screen sizes.

## Internship Submission Notes

- Repository:
- Live Demo :

## Author

- Candidate Name: Muhamed Essam
- Internship Role: Frontend Developer / MERN Stack Intern

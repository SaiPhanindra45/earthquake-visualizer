🌍 Earthquake Visualizer - Seismic Pattern Explorer

An interactive real-time earthquake visualization tool for geographic analysis and education.

🔗 Live Demo | 💬 AI Design Process

<!-- TODO: Add a screenshot of your app! -->

🎯 The Challenge

Casey, a geography student, needs to visualize recent earthquake activity to understand global seismic patterns, plate tectonics, and high-risk zones.

✨ Key Features

📍 Interactive Global Map: Real-time earthquake data from USGS rendered with react-leaflet.

📊 Accessible Data List: A screen-reader-friendly list of all events, sortable by magnitude or time.

🚀 High-Performance: The heavy EarthquakeMap component is lazy-loaded using React.lazy and <Suspense> to ensure a fast initial page load.

🛡️ Robust Error Handling:

API Errors: Displays a clear error message if the USGS data fails to load.

UI Errors: The map is wrapped in a React ErrorBoundary to prevent the entire application from crashing.

Clean Architecture: All data-fetching and state management logic is abstracted into a custom useEarthquakeData hook.

📱 Fully Responsive: A mobile-first layout that works on all devices.

🛠️ Technology Stack

Purpose

Technology

Why

Framework

React 18 + Vite

Fast dev server & modern React features.

Mapping

Leaflet + react-leaflet

Recommended by the challenge; lightweight and powerful.

Styling

Tailwind CSS

Rapid, utility-first UI development.

Data Fetching

axios

Simple, promise-based HTTP client.

State

React Hooks

useState, useEffect for clean, local state management.

🏗️ Architecture Decisions

1. useEarthquakeData Custom Hook

I abstracted all data fetching, cleaning, and state management (loading, error, data) into a single custom hook. This follows the Single Responsibility Principle, keeping App.jsx clean and focused on layout.

2. React.lazy + <Suspense>

Mapping libraries are large. To provide an instant "Time to Interactive," I lazy-load the EarthquakeMap component. This means the user gets the accessible list and loading skeleton immediately, while the map bundle is fetched in the background.

3. Accessibility First (Map + List)

A map is a visual component and is not fully accessible to all users. I built a parallel EarthquakeList component that displays the exact same data in a semantic, sortable <ul>. This ensures Casey (and all users) can access the information, a key "impress them" feature.

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/megh-bari/pattern-craft.git
cd pattern-craft
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## How to Use This

1. Visit the live site: **[https://patterncraft.fun](https://pattern-craft.vercel.app/)**
2. Browse through the collection of background patterns and gradients.
3. Click on any pattern to open its preview modal.
4. Copy the CSS/Tailwind-compatible code snippet.
5. Paste it into your project wherever needed — it's responsive, clean, and ready to go!


🔮 Future Improvements

Color-Coded Markers: Change marker color based on magnitude.

Time Filter: Add a dropdown to show data from the "Past Week" or "Past Month".

Plate Tectonics Overlay: Add a GeoJSON overlay to show plate boundaries, providing direct context for why earthquakes happen where they do.
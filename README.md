<div align="center">

🌍 Earthquake Visualizer

Visualizing the planet's pulse in real-time.

<!-- ADD A BANNER IMAGE HERE IF YOU MAKE ONE -->

<!-- <img src="./public/banner.png" alt="Earthquake Visualizer Banner" /> -->

<p>
An interactive tool built for "Casey," a geography student, to visualize and understand global seismic patterns using real-time data from the USGS.
</p>

<!-- STATIC BADGES FOR YOUR TECH STACK -->

<p>
<img src="./public/React-icon.svg.png" alt="React" />
<img src="./public/vite.svg" alt="Vite" />
<img src="./public/leaflet-icon.png" alt="Leaflet" />
<img src="./public/tailwind.png" alt="Tailwind CSS" />
</p>

🔗 Live Demo  | 💬 AI Design Process

</div>

The Challenge: Casey, a geography student, needs to visualize recent earthquake activity to understand global seismic patterns, plate tectonics, and high-risk zones. This project is a direct response to that need, built as a take-home challenge.

<!--
TODO: TAKE SCREENSHOTS OF YOUR FINISHED APP AND REPLACE THESE PLACEHOLDERS
A desktop and mobile screenshot will show off your responsive design.
-->

<p align="center">
<img src="https://www.google.com/search?q=https://placehold.co/800x450%3Ftext%3DYour%2BApp%2BScreenshot%2B(Desktop)" alt="App Screenshot Desktop" width="80%"/>







<img src="https://www.google.com/search?q=https://placehold.co/300x600%3Ftext%3DYour%2BApp%2BScreenshot%2B(Mobile)" alt="App Screenshot Mobile" height="400"/>
</p>

✨ Key Features

📍 Interactive Global Map: Real-time earthquake data from USGS rendered with react-leaflet.

📊 Accessible Data List: A screen-reader-friendly list of all events, sortable by magnitude or time.

🚀 High-Performance: The heavy EarthquakeMap component is lazy-loaded using React.lazy and <Suspense> to ensure a fast initial page load.

🛡️ Robust Error Handling:

API Errors: Displays a clear error message if the USGS data fails to load.

UI Errors: The map is wrapped in a React ErrorBoundary to prevent the entire application from crashing.

** Clean Architecture:** All data-fetching and state management logic is abstracted into a custom useEarthquakeData hook.

📱 Fully Responsive: A mobile-first layout that works on all devices.

🛠️ Tech Stack

This table is inspired by the "Pattern Craft" README, explaining not just the "what" but the "why."

Purpose

Technology

Why

Framework

React 18 + Vite

Fast dev server & modern React features. Required by the challenge.

Mapping

Leaflet + react-leaflet

Recommended by the challenge; lightweight, open-source, and powerful.

Styling

Tailwind CSS

Rapid, utility-first UI development for a clean, modern look.

Data Fetching

axios

Simple, promise-based HTTP client for fetching GeoJSON data.

State

React Hooks

useState, useEffect for clean, local state management. No over-engineering.

🏗️ Architecture Decisions

This is why the app is built this way.

1. useEarthquakeData Custom Hook

I abstracted all data fetching, data cleaning (like reversing coordinates), and state management (loading, error, data) into a single custom hook. This follows the Single Responsibility Principle, keeping App.jsx clean and focused purely on layout and state-passing.

2. React.lazy + <Suspense>

Mapping libraries like Leaflet are large and can slow down the initial page load. To provide an instant "Time to Interactive," I lazy-load the EarthquakeMap component. This means the user gets the accessible list and loading skeleton immediately, while the heavier map bundle is fetched in the background.

3. Accessibility First (Map + List)

A map is a visual component and is not fully accessible to all users (especially screen readers). To solve this, I built a parallel EarthquakeList component that displays the exact same data in a semantic, sortable <ul>. This ensures Casey (and all users) can access the information, demonstrating a commitment to inclusive design.

🚀 Getting Started

Clone the repository:

git clone [https://github.com/your-username/earthquake-viz.git](https://github.com/your-username/earthquake-viz.git)
cd earthquake-viz


Install dependencies:
(This project uses npm, but you can use yarn or pnpm)

npm install


Run the development server:

npm run dev


Open http://localhost:5173 in your browser.

🔮 Future Improvements

This project meets the core requirements, but here are features I would add next:

Color-Coded Markers: Change marker color based on magnitude (e.g., green -> yellow -> red).

Time Filter: Add a dropdown to show data from the "Past Week" or "Past Month".

Plate Tectonics Overlay: Add a GeoJSON overlay to show plate boundaries, providing direct context for why earthquakes happen where they do.

Fly-to Animation: When a user clicks an item in the list, have the Leaflet map animate to that marker's coordinates.

<p align="center">
Built by [Your Name] for the take-home challenge.
</p>
<div align="center">

🌍 Earthquake Visualizer

Visualizing the planet's pulse in real-time.

<!-- ADD A BANNER IMAGE HERE IF YOU MAKE ONE -->

<!-- <img src="./public/banner.png" alt="Earthquake Visualizer Banner" /> -->

<p>
An interactive tool built for "Casey," a geography student, to visualize and understand global seismic patterns using real-time data from the USGS.
</p>

<!-- STATIC BADGES FOR YOUR TECH STACK -->

<p align="center">
<img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png" alt="React" width="60" height="60" style="margin: 0 10px;" />
<img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/vite.png" alt="Vite" width="60" height="60" style="margin: 0 10px;" />
<img src="./public/leaflet-icon.svg" alt="Leaflet" width="140" height="140" style="margin: 0 10px;" />
<img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/tailwind_css.png" alt="Tailwind CSS" width="60" height="60" style="margin: 0 10px;" />
</p>
🔗 Live Demo  | 💬 AI Design Process

</div>

The Challenge: Casey, a geography student, needs to visualize recent earthquake activity to understand global seismic patterns, plate tectonics, and high-risk zones. This project is a direct response to that need, built as a take-home challenge.

<!--
TODO: TAKE SCREENSHOTS OF YOUR FINISHED APP AND REPLACE THESE PLACEHOLDERS
A desktop and mobile screenshot will show off your responsive design.
-->

<p align="center">
<img src="./public/mockup.png" alt="App Screenshot Desktop" width="80%"/>
</p>

✨ Key Features

📍 Interactive Global Map: Real-time earthquake data from USGS rendered with react-leaflet.

📊 Accessible Data List: A screen-reader-friendly list of all events, sortable by magnitude or time.

🚀 High-Performance: The heavy EarthquakeMap component is lazy-loaded using React.lazy and <Suspense> to ensure a fast initial page load.

🛡️ Robust Error Handling:

API Errors: Displays a clear error message if the USGS data fails to load.

UI Errors: The map is wrapped in a React ErrorBoundary to prevent the entire application from crashing.

| Feature                       | Description                                                                          |
| ----------------------------- | ------------------------------------------------------------------------------------ |
| 📍 **Interactive Global Map** | Real-time earthquake data visualized using **react-leaflet**.                        |
| 📊 **Accessible Data List**   | Screen-reader-friendly event list, sortable by magnitude or time.                    |
| 🚀 **High Performance**       | The heavy `EarthquakeMap` component is **lazy-loaded** for instant first paint.      |
| 🛡️ **Robust Error Handling** | Gracefully handles API or UI errors via a React **ErrorBoundary**.                   |
| 🧩 **Clean Architecture**     | All data fetching and state logic abstracted into a `useEarthquakeData` custom hook. |
| 📱 **Fully Responsive**       | Tailwind CSS ensures mobile-first, adaptive design across devices.                   |


| Purpose              | Technology                            | Why It Was Chosen                                                          |
| -------------------- | ------------------------------------- | -------------------------------------------------------------------------- |
| **Framework**        | React 18 + Vite                       | Fast dev server, modern React features, minimal setup overhead.            |
| **Mapping**          | Leaflet + React-Leaflet               | Lightweight, open-source, and specifically recommended by the challenge.   |
| **Styling**          | Tailwind CSS                          | Utility-first styling for clean, modern UI and rapid development.          |
| **Data Fetching**    | Axios                                 | Simple, promise-based HTTP client for handling GeoJSON.                    |
| **State Management** | React Hooks (`useState`, `useEffect`) | Lightweight, local state—no over-engineering with Redux or Context needed. |


## 🌐 Data Source

All earthquake data is provided by the USGS Earthquake Hazards Program API:

```
https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
```

For historical datasets, the app can also load offline GeoJSON files (e.g., earthquakes_2000_2025.geojson) to visualize long-term seismic trends.

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


🔮 Future Improvements

This project meets the core requirements, but here are features I would add next:

Color-Coded Markers: Change marker color based on magnitude (e.g., green -> yellow -> red).

Time Filter: Add a dropdown to show data from the "Past Week" or "Past Month".

Plate Tectonics Overlay: Add a GeoJSON overlay to show plate boundaries, providing direct context for why earthquakes happen where they do.

Fly-to Animation: When a user clicks an item in the list, have the Leaflet map animate to that marker's coordinates.

<p align="center">
Built by [Your Name] for the take-home challenge.
</p>
import React, { Suspense, useMemo, useState } from 'react';
import { useEarthquakeData } from './hooks/useEarthquakeData';

// Import all your components
import ErrorBoundary from './ui/ErrorBoundary';
import ErrorMessage from './ui/ErrorMessage';
import MapSkeleton from './components/Map/MapSkeleton';
import EarthquakeList from './components/List/EarthquakeList';

// Lazy-load the heavy map component
const EarthquakeMap = React.lazy(() => 
  import('./components/Map/EarthquakeMap')
);

function App() {
  const { earthquakes, loading, error } = useEarthquakeData();
  const [minMagnitude, setMinMagnitude] = useState(0);
  
  // State to manage mobile view
  const [mobileView, setMobileView] = useState('map'); // 'map' or 'list'

  const filteredEarthquakes = useMemo(() => {
    // This calculation is memoized
    return earthquakes.filter(eq => eq.mag >= minMagnitude);
  }, [earthquakes, minMagnitude]);

  // Handle API Error State
  if (error) {
    return <ErrorMessage message={error.message} />;
  }
  
  // Handle API Loading State
  if (loading) {
    // Use a full-screen loader that matches our theme
    return (
       <div 
        className="flex h-screen w-full items-center justify-center"
        style={{
          // Use the new light gradient
          background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #475569 100%)"
        }}
      >
        {/* Updated text color to be visible on a light background */}
        <h1 className="animate-pulse text-3xl font-bold text-slate-800">
          Loading Live Earthquake Data...
        </h1>
      </div>
    );
  }

  // Main App Render
  return (
    <div 
      className="relative flex h-screen w-full flex-col md:flex-row"
      style={{
        // Use the new light gradient
        background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #475569 100%)"
      }}
    >
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        {/* Optional background seismograph could go here */}
      </div>

      {/* TABS - Mobile Only */}
      <div className="relative z-20 flex md:hidden w-full justify-center p-2 gap-2 bg-black/20 backdrop-blur-sm">
        <button
          onClick={() => setMobileView('list')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            mobileView === 'list' 
              ? 'bg-white text-black' 
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
        >
          List
        </button>
        <button
          onClick={() => setMobileView('map')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            mobileView === 'map' 
              ? 'bg-white text-black' 
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
        >
          Map
        </button>
      </div>

      {/* Main content area */}
      {/* Conditionally render list and map based on mobileView state */}
      <aside 
        className={`relative z-10 w-full flex-shrink-0 
                    ${mobileView === 'list' ? 'flex flex-1' : 'hidden'} 
                    md:flex md:w-1/3 md:h-full lg:w-1/4`}
      >
        <EarthquakeList
          earthquakes={filteredEarthquakes}
          minMagnitude={minMagnitude}
          onMagnitudeChange={setMinMagnitude}
        />
      </aside>
      <main 
        className={`relative z-10 w-full 
                    ${mobileView === 'map' ? 'flex flex-1' : 'hidden'} 
                    md:flex md:w-2/3 md:h-full lg:w-3/4`}
      >
        <ErrorBoundary>
          <Suspense fallback={<MapSkeleton />}>
            <EarthquakeMap earthquakes={filteredEarthquakes} />
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  );
}

export default App;


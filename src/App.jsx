import React, { Suspense, useMemo, useState } from 'react';
import { useEarthquakeData } from './hooks/useEarthquakeData';
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




  const filteredEarthquakes = useMemo(() => {
    return earthquakes.filter(eq => eq.mag >= minMagnitude);
  }, [earthquakes, minMagnitude]);

  if (error) {
    return <ErrorMessage message={error.message} />;
  }
  if (loading) {
    return <MapSkeleton />;
  }

  return (
    <div className="min-h-screen w-full relative">
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #475569 100%)",
    }}
  />
  <div className="relative z-10 flex h-screen w-full flex-col md:flex-row">
       

        <aside className="h-1/3 w-full flex-shrink-0 md:h-full lg:w-1/4">
          <EarthquakeList
            earthquakes={filteredEarthquakes}
            minMagnitude={minMagnitude}
            onMagnitudeChange={setMinMagnitude}
          />
        </aside>

        <main className="h-2/3 w-full md:h-full lg:w-3/4">
          <ErrorBoundary>
            <Suspense fallback={<MapSkeleton />}>
              <EarthquakeMap earthquakes={filteredEarthquakes} />
            </Suspense>
          </ErrorBoundary>
        </main>
      </div>
</div>
    
  );
}

export default App;


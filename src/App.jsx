import React, { Suspense } from 'react';
import { useEarthquakeData } from './hooks/useEarthquakeData';
import ErrorBoundary from './ui/ErrorBoundary';
import ErrorMessage from './ui/ErrorMessage';
import MapSkeleton from './components/Map/MapSkeleton';
import EarthquakeList from './components/List/EarthquakeList';

const EarthquakeMap = React.lazy(() => 
  import('./components/Map/EarthquakeMap')
);

function App() {
  const { earthquakes, loading, error } = useEarthquakeData();
  if (error) return <ErrorMessage message={error.message} />;
  if (loading) return <MapSkeleton />;

  return (
    <div className="flex h-screen w-full flex-col md:flex-row">
      <aside className="h-1/3 w-full flex-shrink-0 md:h-screen md:w-1/3 lg:w-1/4">
        <EarthquakeList earthquakes={earthquakes} />
      </aside>
      <main className="h-2/3 w-full md:h-screen md:w-2/3 lg:w-3/4">
        <ErrorBoundary>
          <Suspense fallback={<MapSkeleton />}>
            <EarthquakeMap earthquakes={earthquakes} />
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  );
}
export default App;
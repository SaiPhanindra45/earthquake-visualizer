import React, { useState } from 'react';

/**
 * This is our "Accessibility Win".
 * It shows the same data as the map, but in a sortable,
 * screen-reader-friendly list.
 */
export default function EarthquakeList({ earthquakes }) {
  const [sortBy, setSortBy] = useState('time'); // 'time' or 'mag'

  // Sort the data based on the state
  const sortedEarthquakes = [...earthquakes].sort((a, b) => {
    if (sortBy === 'mag') {
      return b.mag - a.mag; // Highest magnitude first
    }
    return b.time - a.time; // Most recent first
  });

  return (
    <div className="flex h-full flex-col bg-white">
      {/* Header and Sorter */}
      <div className="border-b border-gray-200 p-4">
        <h2 className="text-xl font-bold">Recent Earthquakes</h2>
        <p className="text-sm text-gray-600">
          Displaying {earthquakes.length} events
        </p>
        <label className="mt-2 block text-sm font-medium">
          Sort by:
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="ml-2 w-full rounded border border-gray-300 p-1"
          >
            <option value="time">Most Recent</option>
            <option value="mag">Highest Magnitude</option>
          </select>
        </label>
      </div>

      {/* Scrollable List */}
      <div className="flex-1 overflow-y-auto">
        <ul className="divide-y divide-gray-200">
          {sortedEarthquakes.map(eq => (
            <li key={eq.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="text-base font-bold">M {eq.mag.toFixed(1)}</div>
                  <div className="text-sm text-gray-800">{eq.place}</div>
                </div>
                <div className="ml-2 text-right text-xs text-gray-500">
                  {new Date(eq.time).toLocaleTimeString()}
                  <br />
                  {new Date(eq.time).toLocaleDateString()}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

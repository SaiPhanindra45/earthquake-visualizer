import React, { useState, useEffect, useRef } from 'react';

export default function EarthquakeList({
  earthquakes,
  minMagnitude,
  onMagnitudeChange,
}) {
  const [sortBy, setSortBy] = useState('time'); // 'time' or 'magnitude'
  const [isSortOpen, setIsSortOpen] = useState(false); // State for our new custom dropdown
  const sortDropdownRef = useRef(null); // Create a ref for the dropdown container

  const sortedEarthquakes = [...earthquakes].sort((a, b) => {
    if (sortBy === 'magnitude') {
      return b.mag - a.mag; // Highest magnitude first
    }
    return b.time - a.time; // Most recent first
  });

  // This effect handles closing the dropdown when clicking outside
  useEffect(() => {
    // Function to run on click
    const handleClickOutside = (event) => {
      // Check if the ref is set and if the click was outside the ref's element
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target)) {
        setIsSortOpen(false);
      }
    };

    // Add the event listener to the document
    if (isSortOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSortOpen]); // Only re-run this effect if isSortOpen changes

  const sortOptions = {
    time: 'Most Recent',
    magnitude: 'Highest Magnitude',
  };

  const selectSort = (option) => {
    setSortBy(option);
    setIsSortOpen(false);
  };

  // The component's render logic starts here
  return (
    // Bezel container
    <div className="h-full w-full bg-transparent p-4">
      {/* Main glassmorphism container */}
      <div className="flex h-full w-full flex-col overflow-hidden rounded-lg border-white border-b-2 bg-white/20 backdrop-blur-lg shadow-lg">
        
        {/* Header Section */}
        <div className="border-b border-white/20 p-4">
          <h2 className="text-xl font-bold text-black">Recent Earthquakes</h2>
          <p className="text-sm text-black">
            Showing <strong>{earthquakes.length.toLocaleString()}</strong> events from the past 24 hours
          </p>
        </div>

        {/* Filter Section */}
        <div className="border-b border-white/20 p-4">
          {/* Magnitude Slider */}
          <label
            htmlFor="magnitudeSlider"
            className="mb-2 block text-sm font-medium text-black"
          >
            Minimum Magnitude: <span className="font-bold">{minMagnitude.toFixed(1)}</span>
          </label>
          <input
            id="magnitudeSlider"
            type="range"
            min="0"
            max="10" 
            step="0.1"
            value={minMagnitude}
            onChange={(e) => onMagnitudeChange(parseFloat(e.target.value))}
            className="range-gradient h-2 w-full cursor-pointer appearance-none rounded-lg"
          />
        </div>

        {/* Sort Section (Custom Dropdown) */}
        <div className="border-b border-white/20 p-4">
          <label htmlFor="sort" className="mb-1 block text-sm font-medium text-black">
            Sort by:
          </label>
          {/* Add the ref to the relative container */}
          <div className="relative" ref={sortDropdownRef}>
            {/* Custom dropdown button */}
            <button
              id="sort"
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex w-full items-center justify-between rounded-md border border-white/30 bg-white/30 p-2 text-sm text-black"
            >
              {sortOptions[sortBy]}
              {/* Chevron icon */}
              <svg className={`h-5 w-5 transition-transform ${isSortOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {/* Dropdown menu */}
            {isSortOpen && (
              <div className="absolute z-10 mt-1 w-full rounded-md border border-white/30 bg-white  shadow-lg">
                <ul>
                  <li
                    onClick={() => selectSort('time')}
                    className="cursor-pointer p-2 text-black hover:bg-gray-200 rounded-md"
                  >
                    {sortOptions.time}
                  </li>
                  <li
                    onClick={() => selectSort('magnitude')}
                    className="cursor-pointer p-2 text-black hover:bg-gray-200 rounded-md"
                  >
                    {sortOptions.magnitude}
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* List of earthquakes */}
        <ul className="flex-1 overflow-y-auto min-h-0">
          {sortedEarthquakes.length > 0 ? (
            sortedEarthquakes.map((eq) => (
              <li
                key={eq.id}
                className="border-b border-white/20 px-4 py-3 hover:bg-white/10"
              >
                <div className="font-bold text-black">M {eq.mag.toFixed(1)}</div>
                <div className="text-sm text-black">{eq.place}</div>
                <div className="text-xs text-black">
                  {new Date(eq.time).toLocaleString()}
                </div>
              </li>
            ))
          ) : (
            // Empty state message
            <li className="p-4 text-center text-gray-200">
              No events match your filters.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}


import { useState, useEffect } from 'react';
import axios from 'axios';
const API_URL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';

export function useEarthquakeData() {
  const [earthquakes, setEarthquakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(API_URL);
        const features = response.data.features;
        const cleanedData = features.map(f => ({
          id: f.id,
          mag: f.properties.mag ?? 0,
          place: f.properties.place ?? 'Unknown location',
          time: f.properties.time,
          coords: [f.geometry.coordinates[1], f.geometry.coordinates[0]],
        }));
        setEarthquakes(cleanedData);
      } catch (err) {
        console.error("Failed to fetch earthquake data:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { earthquakes, loading, error };
}
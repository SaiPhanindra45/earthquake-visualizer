import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
const position = [20, 0];
const zoom = 2;

const tileUrl = "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export default function EarthquakeMap({ earthquakes }) {
  return (
    <div className="h-full w-full bg-transparent p-4 rounded-lg overflow-hidden">
    
      <MapContainer
        center={position}
        zoom={zoom}
        key={earthquakes.length}
      >
        <TileLayer url={tileUrl} attribution={attribution} />

        {earthquakes.map(eq => (
          <Marker key={eq.id} position={eq.coords}>
            <Popup>
              <div className="font-sans">
                <strong className="text-base">M {eq.mag.toFixed(1)}</strong>
                <p className="m-0">{eq.place}</p>
                <p className="m-0 text-gray-600">
                  {new Date(eq.time).toLocaleString()}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}


import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
const position = [20, 0];
const zoom = 2;

export default function EarthquakeMap({ earthquakes }) {
  return (
    <MapContainer center={position} zoom={zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
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
  );
}
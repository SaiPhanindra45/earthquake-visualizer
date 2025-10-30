import 'leaflet/dist/leaflet.css'; 
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: './public/images/marker-icon-2x.png',
  iconUrl: './public/images/marker-icon.png',
  shadowUrl: './public/images/marker-shadow.png',
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
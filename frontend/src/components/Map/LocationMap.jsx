import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const LocationMap = ({ onLocationSelect }) => {
  const [position, setPosition] = useState([18.5204, 73.8567]); // Default position (Pune)

  // Set the default icon for Leaflet
  const DefaultIcon = L.icon({
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  // Update the position when a location is selected
  const LocationMarker = () => {
    useMapEvent("click", (event) => {
      const { lat, lng } = event.latlng;
      setPosition([lat, lng]);
      onLocationSelect({ lat, lng }); // Pass the selected location back to the parent
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You selected this location!</Popup>
      </Marker>
    );
  };

  return (
    <MapContainer center={position} zoom={13} style={{ height: "300px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker />
    </MapContainer>
  );
};

export default LocationMap;

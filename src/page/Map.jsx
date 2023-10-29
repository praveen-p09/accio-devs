import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function MapContainer() {
  const mapStyles = {
    height: "100vh",
    width: "100vw",
  };

  const center = {
    lat: 37.7749, // Your initial latitude
    lng: -122.4194, // Your initial longitude
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAMtbc4WU0CM-xz0iurLoefdXuVlSBABYQ"
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={14}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MapContainer;

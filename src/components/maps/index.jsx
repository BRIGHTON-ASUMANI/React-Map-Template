import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  height: '100vh',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function GoogleMapComponent() {
  return (
    <LoadScript
      googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(GoogleMapComponent);

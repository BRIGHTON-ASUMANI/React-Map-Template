import React, { useCallback, useRef, useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { Form, message } from 'antd';
import mapStyles from './mapStyles';
import SearchMapInput from './searchMap';

const containerStyle = {
  height: '100vh',
  display: 'flex',
  boarder: '2px',
};

const options = {
  styles: mapStyles,
  disableDefaultUl: true,
  ZoomControl: true,
};

const GoogleMapComponent = () => {
  const [currentLocation, setCurrentLocation] = useState({
    lat: -1.3252563537572846,
    lng: 36.84980479734451,
  });

  const mapRef = useRef();
  const [form] = Form.useForm();

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(15);
  }, []);

  const {
    ready,
    suggestions: { data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 43.6532, lng: () => -79.3832 },
      radius: 100 * 1000,
    },
  });

  const handleInput = (e) => {
    setValue(e);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
      form?.setFieldsValue({
        address,
        longitude: lng,
        latitude: lat,
      });

      setCurrentLocation({
        ...currentLocation,
        lat,
        lng,
      });
    } catch (error) {
      message.error('Error loading google maps');
    }
  };

  const optionsToDisplay = data.map((place) => ({
    label: place.description,
    value: place.description,
  }));

  const onMapClick = useCallback(
    (event) => {
      setCurrentLocation({
        ...currentLocation,
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      });
    },
    [currentLocation],
  );

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const handleDragEnd = (coord) => {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();
    setCurrentLocation({ lat, lng });
  };

  return (
    <>
      <SearchMapInput
        placeholder="Type in specific addresses"
        onSearch={handleInput}
        onSelect={handleSelect}
        options={optionsToDisplay}
      />

      <GoogleMap
        zoom={14}
        options={options}
        center={currentLocation}
        onLoad={onMapLoad}
        mapContainerStyle={containerStyle}
        onClick={onMapClick}
      >
        <Marker
          draggable
          onDragEnd={handleDragEnd}
          position={{
            ...currentLocation,
          }}
        />
      </GoogleMap>

    </>
  );
};

export default React.memo(GoogleMapComponent);

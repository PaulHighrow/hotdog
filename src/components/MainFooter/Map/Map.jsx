import {
  GoogleMap,
  InfoWindow,
  MarkerF,
  useJsApiLoader,
} from '@react-google-maps/api';
import { useMemo } from 'react';
import { Location, LocationAdress, LocationName } from './Map.styled';

export const Map = () => {
  const sizes = { width: '100%', height: '400px' };

  const center = useMemo(
    () => ({
      lat: 49.842132433846984,
      lng: 24.040286925051372,
    }),
    []
  );

  const marker = {
    lat: 49.842132433846984,
    lng: 24.040286925051372,
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
  });

  return (
    <div style={sizes}>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={18}
        >
          <MarkerF position={marker} title="Hot Dog Grooming">
            <InfoWindow position={marker}>
              <Location>
                <LocationName>Hot Dog Grooming</LocationName>{' '}
                <LocationAdress>вул. В. Короленка, 2</LocationAdress>
              </Location>
            </InfoWindow>
          </MarkerF>
        </GoogleMap>
      )}
    </div>
  );
};

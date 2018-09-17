import React from 'react';

const MapLink = ({ map, redirect }) => (
  <div className="map-link">
    <button onClick={() => redirect(map._id)}>{map.name}</button>
  </div>
);

export default MapLink;

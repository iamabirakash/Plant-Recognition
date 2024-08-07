import React from 'react';

function PlantDetails({ details }) {
  return (
    <div>
      <h2>Plant Details</h2>
      <pre>{JSON.stringify(details, null, 2)}</pre>
    </div>
  );
}

export default PlantDetails;
import React, { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import PlantDetails from './components/PlantDetails';
import { analyzePlant } from './services/geminiService';
import './App.css';

function App() {
  const [plantDetails, setPlantDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (image) => {
    setLoading(true);
    try {
      const details = await analyzePlant(image);
      setPlantDetails(details);
    } catch (error) {
      console.error('Error analyzing plant:', error);
      alert('Error analyzing plant. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>Plant Analyzer</h1>
      <ImageUpload onImageUpload={handleImageUpload} />
      {loading && <p>Analyzing plant...</p>}
      {plantDetails && <PlantDetails details={plantDetails} />}
    </div>
  );
}

export default App;
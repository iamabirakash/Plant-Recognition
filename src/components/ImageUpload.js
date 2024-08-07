import React, { useState } from 'react';

function ImageUpload({ onImageUpload }) {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (image) {
      onImageUpload(image);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button type="submit" disabled={!image}>
        Analyze Plant
      </button>
    </form>
  );
}

export default ImageUpload;
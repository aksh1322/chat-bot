import React, { useState } from 'react';
import imageService from '../services/imageService';

function ImageAnalysisComponent() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await imageService.analyzeImage(file);
    setResult(res.data.result);
  };

  return (
    <div>
      <h2>Image Analysis</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit">Analyze</button>
      </form>
      <p>Result: {result}</p>
    </div>
  );
}

export default ImageAnalysisComponent;

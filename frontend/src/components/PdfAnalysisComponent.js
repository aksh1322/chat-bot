import React, { useState } from 'react';
import pdfService from '../services/pdfService';

function PdfAnalysisComponent() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await pdfService.analyzePdf(file);
    setResult(res.data.result);
  };

  return (
    <div>
      <h2>PDF Analysis</h2>
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

export default PdfAnalysisComponent;

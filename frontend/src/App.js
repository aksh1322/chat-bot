import React from 'react';
import ChatComponent from './components/ChatComponent';
import ImageAnalysisComponent from './components/ImageAnalysisComponent';
import PdfAnalysisComponent from './components/PdfAnalysisComponent';

function App() {
  return (
    <div className="App">
      <h1>Chatbot Interface</h1>
      <ChatComponent />
      <ImageAnalysisComponent />
      <PdfAnalysisComponent />
    </div>
  );
}

export default App;

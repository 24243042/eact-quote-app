
import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const quotes = [
    "Believe in yourself.",
    "Never stop learning.",
    "Small steps lead to big success."
  ];

  return (
    <div style={{
      textAlign: 'center',
      marginTop: '100px',
      fontFamily: 'Arial'
    }}>
      <h1>React Quote App</h1>
      <h2>{quotes[0]}</h2>
      <p>Built with React and Jenkins</p>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);

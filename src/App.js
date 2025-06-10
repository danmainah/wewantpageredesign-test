import React from 'react';
import SkipList from './components/SkipList';

function App() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center' }}>Choose Your Skip Size</h1>
      <p style={{ textAlign: 'center', color: '#555' }}>
        Select the skip size that best suits your needs
      </p>
      <SkipList />
    </main>
  );
}

export default App;


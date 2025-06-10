import React from 'react';
import SkipList from './components/SkipList';

function App() {
  return (
    <main style={{ 
      padding: '2rem',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ 
          textAlign: 'center',
          fontSize: '2.5rem',
          marginBottom: '1rem',
          color: '#1a1a1a'
        }}>
          Choose Your Skip Size
        </h1>
        <p style={{ 
          textAlign: 'center',
          color: '#555',
          fontSize: '1.1rem',
          marginBottom: '2rem'
        }}>
          Select the skip size that best suits your needs
        </p>
        <SkipList />
      </div>
    </main>
  );
}

export default App;


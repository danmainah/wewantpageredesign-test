import React from 'react';
import SkipList from './components/SkipList';
import ProgressNavbar from './components/ProgressNavbar';
import SkipSelectionBar from './components/SkipSelectionBar';

function App() {
  //  onBack/onContinue as needed to be implemented in future
  const handleBack = () => { /* logic here */ };
  const handleContinue = () => { /* logic here */ };

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 p-0">
      <ProgressNavbar />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Skip Size
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Select the skip size that best suits your needs. We offer various sizes to accommodate your waste disposal requirements.
          </p>
        </div>
        <SkipList />
      </div>
      <SkipSelectionBar onBack={handleBack} onContinue={handleContinue} />
    </main>
  );
}

export default App;


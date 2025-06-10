import React from 'react';
import { useSelector } from 'react-redux';
import SkipCard from './SkipCard';

const SkipList = () => {
  const skips = useSelector((state) => state.skips.items);

  return (
    <div style={{
      display: 'grid',
      gap: '1.5rem',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
    }}>
      {skips.map((skip) => (
        <SkipCard key={skip.id} skip={skip} />
      ))}
    </div>
  );
};

export default SkipList;

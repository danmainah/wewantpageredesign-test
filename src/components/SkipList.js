import React from 'react';
import { useSelector } from 'react-redux';
import SkipCard from './SkipCard';

const SkipList = () => {
  const skips = useSelector((state) => state.skips.items);

  return (
    <div className="container">
      <div className="row">
        {skips.map((skip) => (
          <div key={skip.id} className="col-12 col-sm-6 col-lg-3 mb-4 d-flex">
            <SkipCard skip={skip} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkipList;

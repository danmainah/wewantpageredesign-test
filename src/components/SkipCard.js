import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSkip } from '../store/skipsSlice';

const SkipCard = ({ skip }) => {
  const dispatch = useDispatch();
  const selectedId = useSelector((state) => state.skips.selectedSkipId);
  const isSelected = selectedId === skip.id;

  // Add validation for skip prop
  if (!skip || typeof skip.size !== 'number') {
    console.error('Invalid skip data:', skip);
    return null;
  }

  // Use the size number directly for the image
  const imageUrl = `/${skip.size}-yarder-skip.jpg`;

  const handleSelect = () => {
    if (skip.id) {
      dispatch(selectSkip(skip.id));
    }
  };

  return (
    <div
      style={{
        padding: '1.5rem',
        borderRadius: '8px',
        border: `2px solid ${isSelected ? '#2563eb' : '#e5e7eb'}`,
        backgroundColor: isSelected ? '#eff6ff' : 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        transition: 'all 0.2s ease'
      }}
    >
      <img
        src={imageUrl}
        alt={`${skip.size} Yard Skip`}
        style={{ 
          width: '100%',
          height: 150,
          objectFit: 'contain',
          marginBottom: '1rem'
        }}
        onError={(e) => {
          console.warn(`Failed to load image: ${imageUrl}`);
          e.target.onerror = null;
          e.target.src = '/skip-placeholder.jpg';
        }}
      />
      <h2 style={{ 
        fontSize: '1.5rem',
        fontWeight: '600',
        marginBottom: '0.5rem'
      }}>
        {skip.size} Yard Skip
      </h2>
      <p style={{ color: '#4b5563', marginBottom: '0.5rem' }}>
        {skip.hire_period_days} day hire
      </p>
      <p style={{ 
        color: '#2563eb',
        fontWeight: 'bold',
        fontSize: '1.25rem',
        marginBottom: '0.5rem'
      }}>
        £{skip.price_before_vat}
      </p>
      {!skip.allowed_on_road && (
        <p style={{ 
          color: '#dc2626',
          fontSize: '0.875rem',
          marginBottom: '0.5rem'
        }}>
          🚫 Not Allowed On The Road
        </p>
      )}
      <button
        onClick={handleSelect}
        style={{
          width: '100%',
          padding: '0.75rem',
          backgroundColor: isSelected ? '#059669' : '#2563eb',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: '600',
          transition: 'background-color 0.2s ease'
        }}
      >
        {isSelected ? 'Selected ✓' : 'Select This Skip'}
      </button>
    </div>
  );
};

export default SkipCard;

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

  return (
    <div
      className={`card skip-card w-100 mb-3 ${isSelected ? 'selected border-success' : ''}`}
      onClick={() => dispatch(selectSkip(skip.id))}
      tabIndex={0}
      style={{ outline: 'none' }}
      onKeyPress={e => { if (e.key === 'Enter') dispatch(selectSkip(skip.id)); }}
    >
      <div className="position-relative">
        <img
          src={imageUrl}
          alt={`${skip.size} Yard Skip`}
          className="card-img-top"
          style={{ height: 150, objectFit: 'contain', background: '#fff' }}
          onError={e => {
            e.target.onerror = null;
            e.target.src = '/skip-placeholder.jpg';
          }}
        />
        <span className="badge bg-success position-absolute top-0 end-0 m-2 fs-6 shadow">
          {skip.size} Yards
        </span>
        {/* Not Allowed On The Road warning */}
        {!skip.allowed_on_road && (
          <div className="position-absolute bottom-0 start-0 m-2 bg-warning text-dark px-2 py-1 rounded d-flex align-items-center" style={{ fontWeight: 600, fontSize: '0.95rem' }}>
            <span className="me-1">🚫</span> Not Allowed On The Road
          </div>
        )}
      </div>
      <div className="card-body text-center">
        <h5 className="card-title">{skip.size} Yard Skip</h5>
        <p className="card-text mb-1">{skip.hire_period_days} day hire</p>
        <p className="card-text fw-bold text-success mb-2">£{skip.price_before_vat}</p>
        <button
          className={`btn skip-btn w-100 ${isSelected ? 'btn-success' : 'btn-outline-success'}`}
          style={{
            fontWeight: 600,
            fontSize: '1.1rem',
            letterSpacing: '0.01em',
            boxShadow: isSelected ? '0 2px 8px rgba(34,197,94,0.15)' : undefined,
            transition: 'box-shadow 0.2s'
          }}
        >
          {isSelected ? (
            <span>
              Selected <span role="img" aria-label="tick">✅</span>
            </span>
          ) : (
            <span>
              Select This Skip <span role="img" aria-label="arrow">👉</span>
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default SkipCard;

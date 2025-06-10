import React from "react";
import { useSelector } from "react-redux";

const SkipSelectionBar = ({ onBack, onContinue }) => {
  const skips = useSelector((state) => state.skips.items);
  const selectedId = useSelector((state) => state.skips.selectedSkipId);
  const selectedSkip = skips.find((s) => s.id === selectedId);

  if (!selectedSkip) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        background: "#d1fae5",
        color: "#166534",
        zIndex: 100,
        boxShadow: "0 -2px 16px rgba(34,197,94,0.15)",
        padding: "1.5rem 0 1rem 0",
        borderTop: "1px solid #bbf7d0",
      }}
    >
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <div style={{
          color: "#166534",
          fontSize: "0.95rem",
          marginBottom: "1rem",
          textAlign: "center"
        }}>
          Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: 900,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <span style={{ fontSize: "1.25rem", fontWeight: 600 }}>
              {selectedSkip.size} Yard Skip
            </span>
            <span style={{ color: "#22c55e", fontWeight: 700, fontSize: "1.25rem" }}>
              £{selectedSkip.price_before_vat}
            </span>
            <span style={{ color: "#166534", fontSize: "1.1rem" }}>
              {selectedSkip.hire_period_days} day hire
            </span>
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button
              onClick={onBack}
              style={{
                background: "#bbf7d0",
                color: "#166534",
                border: "none",
                borderRadius: "8px",
                padding: "0.6rem 1.5rem",
                fontSize: "1rem",
                fontWeight: 500,
                cursor: "pointer",
                marginRight: "0.5rem"
              }}
            >
              Back
            </button>
            <button
              onClick={onContinue}
                className="btn skip-bar-btn"
              style={{
                background: "#22c55e",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                fontSize: "1rem",
                fontWeight: 500,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
              }}
            >
              Continue <span style={{ fontSize: "1.2em" }}>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkipSelectionBar;

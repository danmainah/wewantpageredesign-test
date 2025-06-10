import React from "react";

const steps = [
  {
    label: "Postcode",
    icon: (
      <svg width="22" height="22" fill="none" stroke="#22c55e" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 21s-6-5.686-6-10A6 6 0 0118 11c0 4.314-6 10-6 10z" />
        <circle cx="12" cy="11" r="2.5" fill="#22c55e" stroke="none"/>
      </svg>
    ),
    active: true,
  },
  {
    label: "Waste Type",
    icon: (
      <svg width="22" height="22" fill="none" stroke="#22c55e" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="5" y="7" width="14" height="12" rx="2" />
        <path d="M9 7V4h6v3" />
      </svg>
    ),
    active: true,
  },
  {
    label: "Select Skip",
    icon: (
      <svg width="22" height="22" fill="none" stroke="#22c55e" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="11" width="18" height="6" rx="2" />
        <path d="M5 11V7a2 2 0 012-2h10a2 2 0 012 2v4" />
      </svg>
    ),
    active: true,
  },
  {
    label: "Permit Check",
    icon: (
      <svg width="22" height="22" fill="none" stroke="#7dd3fc" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 20l9-5-9-5-9 5 9 5z" />
        <path d="M12 12V4" />
      </svg>
    ),
    active: false,
  },
  {
    label: "Choose Date",
    icon: (
      <svg width="22" height="22" fill="none" stroke="#7dd3fc" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 9h18" />
      </svg>
    ),
    active: false,
  },
  {
    label: "Payment",
    icon: (
      <svg width="22" height="22" fill="none" stroke="#7dd3fc" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M6 10h.01M2 10h20" />
      </svg>
    ),
    active: false,
  },
];

const ProgressNavbar = () => (
  <nav className="bg-success bg-opacity-10 border-bottom border-success-subtle py-3">
    <div className="container-fluid">
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        {steps.map((step, idx) => (
          <React.Fragment key={step.label}>
            <div className="d-flex align-items-center gap-2 mb-2 mb-md-0">
              <span style={{ display: "flex", alignItems: "center" }}>
                {React.cloneElement(step.icon, {
                  stroke: step.active ? "#22c55e" : "#7dd3fc",
                  fill: step.active ? "#22c55e" : "none"
                })}
              </span>
              <span
                style={{
                  color: step.active ? "#22c55e" : "#7dd3fc",
                  fontWeight: 500,
                  fontSize: "1rem",
                  letterSpacing: "0.01em",
                  whiteSpace: "nowrap"
                }}
              >
                {step.label}
              </span>
            </div>
            {idx < steps.length - 1 && (
              <span
                className="d-none d-sm-inline"
                style={{
                  width: 24,
                  height: 2,
                  background: step.active && steps[idx + 1].active ? "#22c55e" : "#bbf7d0",
                  display: "inline-block",
                  margin: "0 0.5rem",
                  borderRadius: 2,
                  minWidth: 12
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  </nav>
);

export default ProgressNavbar; 
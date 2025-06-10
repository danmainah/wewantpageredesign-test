import React from 'react';
import { render, screen } from '@testing-library/react';
import ProgressNavbar from '../components/ProgressNavbar';

describe('ProgressNavbar', () => {
  it('renders all steps correctly', () => {
    render(<ProgressNavbar />);
    
    // Check if all step labels are rendered
    expect(screen.getByText('Postcode')).toBeInTheDocument();
    expect(screen.getByText('Waste Type')).toBeInTheDocument();
    expect(screen.getByText('Select Skip')).toBeInTheDocument();
    expect(screen.getByText('Permit Check')).toBeInTheDocument();
    expect(screen.getByText('Choose Date')).toBeInTheDocument();
    expect(screen.getByText('Payment')).toBeInTheDocument();
  });

  it('renders with correct styling classes', () => {
    render(<ProgressNavbar />);
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('bg-success', 'bg-opacity-10', 'border-bottom', 'border-success-subtle');
  });
}); 
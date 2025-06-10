import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import skipsReducer from '../store/skipsSlice';
import SkipCard from '../components/SkipCard';

const mockSkip = {
  id: 1,
  size: 4,
  price_before_vat: 150,
  hire_period_days: 7,
  allowed_on_road: true
};

const createMockStore = (initialState = {}) => {
  return configureStore({
    reducer: {
      skips: skipsReducer
    },
    preloadedState: {
      skips: {
        items: [mockSkip],
        selectedSkipId: null,
        ...initialState
      }
    }
  });
};

describe('SkipCard', () => {
  it('renders skip information correctly', () => {
    const store = createMockStore();
    render(
      <Provider store={store}>
        <SkipCard skip={mockSkip} />
      </Provider>
    );

    expect(screen.getByText('4 Yard Skip')).toBeInTheDocument();
    expect(screen.getByText('7 day hire')).toBeInTheDocument();
    expect(screen.getByText('£150')).toBeInTheDocument();
  });

  it('handles selection correctly', () => {
    const store = createMockStore();
    render(
      <Provider store={store}>
        <SkipCard skip={mockSkip} />
      </Provider>
    );

    // Find the button by its text content
    const selectButton = screen.getByRole('button', { name: /select this skip/i });
    fireEvent.click(selectButton);
    
    // After selection, the button should show "Selected"
    expect(screen.getByRole('button', { name: /selected/i })).toBeInTheDocument();
  });

  it('shows warning when skip is not allowed on road', () => {
    const store = createMockStore();
    const skipNotAllowed = { ...mockSkip, allowed_on_road: false };
    
    render(
      <Provider store={store}>
        <SkipCard skip={skipNotAllowed} />
      </Provider>
    );

    // Find the warning by its text content
    expect(screen.getByText(/not allowed on the road/i)).toBeInTheDocument();
  });

  it('handles invalid skip data gracefully', () => {
    const store = createMockStore();
    const invalidSkip = { id: 1 }; // Missing required properties
    
    // Mock console.error to prevent it from showing in test output
    const originalConsoleError = console.error;
    console.error = jest.fn();
    
    const { queryByRole } = render(
      <Provider store={store}>
        <SkipCard skip={invalidSkip} />
      </Provider>
    );

    // Component should not render anything
    expect(queryByRole('button')).not.toBeInTheDocument();
    expect(console.error).toHaveBeenCalledWith('Invalid skip data:', invalidSkip);
    
    // Restore console.error
    console.error = originalConsoleError;
  });
}); 
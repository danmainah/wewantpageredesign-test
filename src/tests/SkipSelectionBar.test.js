import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import skipsReducer from '../store/skipsSlice';
import SkipSelectionBar from '../components/SkipSelectionBar';

const mockSkip = {
  id: 1,
  size: 4,
  price_before_vat: 150,
  hire_period_days: 7,
  allowed_on_road: true
};

const createMockStore = () => {
  return configureStore({
    reducer: {
      skips: skipsReducer
    },
    preloadedState: {
      skips: {
        items: [mockSkip],
        selectedSkipId: 1
      }
    }
  });
};

describe('SkipSelectionBar', () => {
  it('renders selected skip information', () => {
    const store = createMockStore();
    render(
      <Provider store={store}>
        <SkipSelectionBar onBack={() => {}} onContinue={() => {}} />
      </Provider>
    );

    expect(screen.getByText('4 Yard Skip')).toBeInTheDocument();
    expect(screen.getByText('£150')).toBeInTheDocument();
    expect(screen.getByText('7 day hire')).toBeInTheDocument();
  });

  it('calls onBack when back button is clicked', () => {
    const store = createMockStore();
    const handleBack = jest.fn();
    
    render(
      <Provider store={store}>
        <SkipSelectionBar onBack={handleBack} onContinue={() => {}} />
      </Provider>
    );

    fireEvent.click(screen.getByText('Back'));
    expect(handleBack).toHaveBeenCalledTimes(1);
  });

  it('calls onContinue when continue button is clicked', () => {
    const store = createMockStore();
    const handleContinue = jest.fn();
    
    render(
      <Provider store={store}>
        <SkipSelectionBar onBack={() => {}} onContinue={handleContinue} />
      </Provider>
    );

    fireEvent.click(screen.getByText('Continue'));
    expect(handleContinue).toHaveBeenCalledTimes(1);
  });

  it('does not render when no skip is selected', () => {
    const store = configureStore({
      reducer: {
        skips: skipsReducer
      },
      preloadedState: {
        skips: {
          items: [mockSkip],
          selectedSkipId: null
        }
      }
    });

    const { container } = render(
      <Provider store={store}>
        <SkipSelectionBar onBack={() => {}} onContinue={() => {}} />
      </Provider>
    );

    expect(container.firstChild).toBeNull();
  });
}); 
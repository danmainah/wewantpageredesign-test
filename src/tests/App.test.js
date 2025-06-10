import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import skipsReducer from '../store/skipsSlice';
import App from '../App';

const createMockStore = () => {
  return configureStore({
    reducer: {
      skips: skipsReducer
    },
    preloadedState: {
      skips: {
        items: [
          { id: 1, size: 4, price_before_vat: 150 },
          { id: 2, size: 6, price_before_vat: 200 }
        ],
        selectedSkipId: null
      }
    }
  });
};

describe('App', () => {
  it('renders the main heading', () => {
    const store = createMockStore();
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText('Choose Your Skip Size')).toBeInTheDocument();
  });

  it('renders the description text', () => {
    const store = createMockStore();
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText(/Select the skip size that best suits your needs/)).toBeInTheDocument();
  });

  it('renders the progress navbar', () => {
    const store = createMockStore();
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText('Postcode')).toBeInTheDocument();
    expect(screen.getByText('Waste Type')).toBeInTheDocument();
    expect(screen.getByText('Select Skip')).toBeInTheDocument();
  });

  it('renders the skip list', () => {
    const store = createMockStore();
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText('4 Yard Skip')).toBeInTheDocument();
    expect(screen.getByText('6 Yard Skip')).toBeInTheDocument();
  });
});

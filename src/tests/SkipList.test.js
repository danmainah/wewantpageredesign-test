import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import skipsReducer from '../store/skipsSlice';
import SkipList from '../components/SkipList';

const mockSkips = [
  {
    id: 1,
    size: 4,
    price_before_vat: 150,
    hire_period_days: 7,
    allowed_on_road: true
  },
  {
    id: 2,
    size: 6,
    price_before_vat: 200,
    hire_period_days: 7,
    allowed_on_road: false
  }
];

const createMockStore = () => {
  return configureStore({
    reducer: {
      skips: skipsReducer
    },
    preloadedState: {
      skips: {
        items: mockSkips,
        selectedSkipId: null
      }
    }
  });
};

describe('SkipList', () => {
  it('renders all skips from the store', () => {
    const store = createMockStore();
    render(
      <Provider store={store}>
        <SkipList />
      </Provider>
    );

    expect(screen.getByText('4 Yard Skip')).toBeInTheDocument();
    expect(screen.getByText('6 Yard Skip')).toBeInTheDocument();
  });

  it('renders correct number of skip cards', () => {
    const store = createMockStore();
    const { container } = render(
      <Provider store={store}>
        <SkipList />
      </Provider>
    );

    const skipCards = container.getElementsByClassName('skip-card');
    expect(skipCards.length).toBe(mockSkips.length);
  });
}); 
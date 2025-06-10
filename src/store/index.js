import { configureStore } from '@reduxjs/toolkit';
import skipsReducer from './skipsSlice';

const store = configureStore({
  reducer: {
    skips: skipsReducer
  }
});

export default store;

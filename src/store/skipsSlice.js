import { createSlice } from '@reduxjs/toolkit';
import skipsData from '../data/skips.json';

const skipsSlice = createSlice({
  name: 'skips',
  initialState: {
    items: skipsData,
    selectedSkipId: null
  },
  reducers: {
    selectSkip: (state, action) => {
      state.selectedSkipId = action.payload;
    }
  }
});

export const { selectSkip } = skipsSlice.actions;
export default skipsSlice.reducer;

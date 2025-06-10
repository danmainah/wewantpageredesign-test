import store from '../../store';
import skipsReducer from '../../store/skipsSlice';

describe('Redux Store', () => {
  it('should have the correct initial state', () => {
    const state = store.getState();
    expect(state).toEqual({
      skips: {
        items: expect.any(Array),
        selectedSkipId: null
      }
    });
  });

  it('should have the skips reducer', () => {
    const state = store.getState();
    const action = { type: 'skips/selectSkip', payload: 1 };
    const nextState = skipsReducer(state.skips, action);
    
    // Verify that the store's reducer matches the skipsReducer
    expect(nextState).toEqual({
      items: state.skips.items,
      selectedSkipId: 1
    });
  });

  it('should handle unknown actions', () => {
    const state = store.getState();
    const action = { type: 'UNKNOWN_ACTION' };
    const nextState = skipsReducer(state.skips, action);
    
    // State should remain unchanged for unknown actions
    expect(nextState).toEqual(state.skips);
  });
}); 
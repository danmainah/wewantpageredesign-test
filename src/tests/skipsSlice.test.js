import skipsReducer, { selectSkip } from '../store/skipsSlice';

describe('skipsSlice', () => {
  const mockSkips = [
    { id: 1, size: 4, price_before_vat: 150 },
    { id: 2, size: 6, price_before_vat: 200 }
  ];

  const initialState = {
    items: mockSkips,
    selectedSkipId: null
  };

  it('should handle initial state', () => {
    expect(skipsReducer(undefined, { type: 'unknown' })).toEqual({
      items: expect.any(Array),
      selectedSkipId: null
    });
  });

  it('should handle selectSkip action', () => {
    const nextState = skipsReducer(initialState, selectSkip(1));
    expect(nextState.selectedSkipId).toBe(1);
    expect(nextState.items).toEqual(mockSkips);
  });

  it('should handle selectSkip with different id', () => {
    const nextState = skipsReducer(initialState, selectSkip(2));
    expect(nextState.selectedSkipId).toBe(2);
    expect(nextState.items).toEqual(mockSkips);
  });

  it('should maintain items array when selecting skip', () => {
    const nextState = skipsReducer(initialState, selectSkip(1));
    expect(nextState.items).toEqual(initialState.items);
  });

  it('should handle selecting the same skip multiple times', () => {
    let state = skipsReducer(initialState, selectSkip(1));
    state = skipsReducer(state, selectSkip(1));
    expect(state.selectedSkipId).toBe(1);
  });

  it('should handle selecting different skips in sequence', () => {
    let state = skipsReducer(initialState, selectSkip(1));
    state = skipsReducer(state, selectSkip(2));
    expect(state.selectedSkipId).toBe(2);
  });

  it('should handle selecting a non-existent skip id', () => {
    const nextState = skipsReducer(initialState, selectSkip(999));
    expect(nextState.selectedSkipId).toBe(999);
    expect(nextState.items).toEqual(mockSkips);
  });

  it('should handle unknown actions', () => {
    const nextState = skipsReducer(initialState, { type: 'UNKNOWN_ACTION' });
    expect(nextState).toEqual(initialState);
  });

  it('should handle empty items array', () => {
    const emptyState = {
      items: [],
      selectedSkipId: null
    };
    const nextState = skipsReducer(emptyState, selectSkip(1));
    expect(nextState.selectedSkipId).toBe(1);
    expect(nextState.items).toEqual([]);
  });
}); 
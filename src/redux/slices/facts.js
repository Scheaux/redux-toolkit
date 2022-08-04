import { createSlice } from '@reduxjs/toolkit';

const factsSlice = createSlice({
  name: 'facts',
  initialState: {
    amount: 0
  },
  reducers: {
    changeAmount(state, action) {
      state.amount = action.payload;
    }
  }
});

export const { changeAmount } = factsSlice.actions;

export default factsSlice.reducer;

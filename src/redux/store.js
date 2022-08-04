import { configureStore } from '@reduxjs/toolkit';

import factsReducer from './slices/facts';

const store = configureStore({
  reducer: {
    facts: factsReducer
  }
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './itemsSlice';

const store = configureStore({
  reducer: {
    item: itemsReducer,
  },
});

export default store;

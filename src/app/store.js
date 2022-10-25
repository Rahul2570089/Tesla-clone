import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/Car/Slice';

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});

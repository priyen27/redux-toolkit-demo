import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Features/Counter/CounterSlice';
import userFormReducer from './Features/UserForm/UserFormSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userForm: userFormReducer,
  },
});
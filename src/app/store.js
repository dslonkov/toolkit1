import {configureStore} from '@reduxjs/toolkit';
import factReducer from "./factReducer";

export const store = configureStore({
  reducer: factReducer
});

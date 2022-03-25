import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from "./categoriesSlice.js";

export default configureStore({
  reducer: {
    categories: categoriesReducer 
  },
})
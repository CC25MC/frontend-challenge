import { configureStore } from "@reduxjs/toolkit";
import { filesSlice } from "./slices";

export const store = configureStore({
  reducer: {
    files: filesSlice.reducer,
  },
});

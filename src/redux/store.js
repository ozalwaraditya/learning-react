import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice/counterSlice";
import { destinationReducer } from "./slice/destinationSlice";

// Multiple can be created
// Recommended - Single store
export const store = configureStore({
  // reducer can't be empty
  reducer: {
    counterStore: counterReducer,
    destinationStore: destinationReducer,
  },
});

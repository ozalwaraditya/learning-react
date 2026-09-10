import { createSlice } from "@reduxjs/toolkit";
import { resetFromDestinationSlice } from "./destinationSlice";
import { resetComplete } from "../action/actions";
// Slice = Piece of Redux state
// Contains reducers and actions

const initialState = {
  count: 100,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    increment: (state) => {
      state.count += 1;
    },

    decrement: (state) => {
      state.count -= 1;
    },

    incrementMultiplier: (state, action) => {
      state.count += action.payload;
    },

    decrementMultiplier: (state, action) => {
      state.count -= action.payload;
    },
  },

  extraReducers: (builder) => {
    // builder.addCase(resetFromDestinationSlice.toString(), (state) => {
    //   state.count = 0;
    // });
    builder.addCase(resetComplete, (state) => {
      state.count = 0;
    });
  },
});

export const {
  increment,
  decrement,
  incrementMultiplier,
  decrementMultiplier,
} = counterSlice.actions;

export const counterReducer = counterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  destination: [
    {
      name: "Paris",
      days: 4,
      fact: "Paris is known as the City of Light.",
    },
    {
      name: "Tokyo",
      days: 5,
      fact: "Tokyo is one of the most populous metropolitan areas in the world.",
    },
    {
      name: "New York",
      days: 3,
      fact: "New York City is home to the famous Statue of Liberty.",
    },
    {
      name: "Dubai",
      days: 4,
      fact: "Dubai is home to the world's tallest building, the Burj Khalifa.",
    },
  ],
};

const destinationSlice = createSlice({
  name: "destination",
  initialState: initialState,
  reducers: {
    resetFromDestinationSlice: (state, action) => {
      console.log(action);
    },
  },
});

export const { resetFromDestinationSlice } = destinationSlice.actions;
export const destinationReducer = destinationSlice.reducer;

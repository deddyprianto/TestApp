import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usia: { usia: null },
};

export const counterSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    stateUsia: (state, action) => {
      state.usia = action.payload;
    },
  },
});
export const { stateUsia, stateDataZodiac } = counterSlice.actions;

export default counterSlice.reducer;

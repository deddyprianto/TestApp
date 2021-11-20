import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    counter: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { counter } = counterSlice.actions;

export default counterSlice.reducer;

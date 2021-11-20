import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: { data: [] },
};

export const counterSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    takeData: (state, action) => {
      state.data.data = action.payload;
    },
  },
});
export const { takeData } = counterSlice.actions;

export default counterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item1: { item: "Button belom di klik" },
};

export const counterSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    changeBtnOne: (state, action) => {
      state.item1.item = action.payload;
    },
  },
});
export const { changeBtnOne } = counterSlice.actions;

export default counterSlice.reducer;

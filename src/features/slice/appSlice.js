import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: { data: [] },
};
export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    actionSaveData: (state, action) => {
      state.value.data = action.payload;
    },
  },
});

export const { actionSaveData } = appSlice.actions;

export default appSlice.reducer;

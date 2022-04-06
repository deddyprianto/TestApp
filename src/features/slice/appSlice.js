import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  initState: { data: [], modal: false, modalEdit: false, idEdit: 0 },
};
export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    actionSaveData: (state, action) => {
      state.initState.data = action.payload;
    },
    actionCrud: (state, action) => {
      state.initState.modal = action.payload;
    },
    actionCrudEdit: (state, action) => {
      state.initState.modalEdit = action.payload;
    },
    actionCrudIdEdit: (state, action) => {
      state.initState.idEdit = action.payload;
    },
  },
});

export const { actionSaveData, actionCrud, actionCrudEdit, actionCrudIdEdit } =
  appSlice.actions;

export default appSlice.reducer;

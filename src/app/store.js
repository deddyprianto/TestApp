import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import counterSlice from "../features/app/counterSlice";

const reducers = combineReducers({
  app: counterSlice,
});
// config
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["app"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
export default store;

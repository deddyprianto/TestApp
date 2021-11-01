import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../features/app/appSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../app/store";
import { PersistGate } from "redux-persist/integration/react";

let persistor = persistStore(store);
const reducers = combineReducers({
  app: appSlice,
});
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
// this should produce a result
const render = (
  ui,
  {
    preloadState,
    store = configureStore({
      reducer: persistedReducer,
      middleware: [thunk],
    }),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};
export * from "@testing-library/react";
export { render };

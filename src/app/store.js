import { configureStore } from '@reduxjs/toolkit'
import appSlice from '../features/slice/appSlice'

export const store = configureStore({
  reducer: {
    appSlice : appSlice
  },
})
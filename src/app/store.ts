import { configureStore } from '@reduxjs/toolkit'
import userSlice from "../features/userSlice"
import financeSlice from "../features/financeSlice"

export const store = configureStore({
  reducer: {
    userSlice: userSlice,
    financeSlice: financeSlice
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

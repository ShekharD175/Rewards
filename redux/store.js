import { configureStore } from '@reduxjs/toolkit'
import rewardsReducer from "./slice/rewardsSlice"

export const store = configureStore({
  reducer: {
    rewards: rewardsReducer
  },
})
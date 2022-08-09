import { configureStore } from "@reduxjs/toolkit";
import login from "slices/auth";

const store = configureStore({
  reducer: {
    login,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

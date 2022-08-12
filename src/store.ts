import { configureStore } from "@reduxjs/toolkit";

import auth from "slices/auth";
import signup from "slices/signup";

// configureStore: mặc định đã được setup redux devtool và redux thunk
const store = configureStore({
  reducer: {
    auth,
    signup,
  },
  // devTools: false // có enable devtool hay không, mặc định là true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

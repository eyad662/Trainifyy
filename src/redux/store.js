import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { internshipApi } from "./internship";
import applyHistoryReducer from "./applyHistorySlice";

export const store = configureStore({
  reducer: {
    [internshipApi.reducerPath]: internshipApi.reducer,
    applyHistory: applyHistoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(internshipApi.middleware),
});

setupListeners(store.dispatch);

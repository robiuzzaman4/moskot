import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import teamsSlice from "./features/teams/teamsSlice";
import { baseApi } from "./features/api/baseApi";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    teamsSlice: teamsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { movieApi } from "../services/movieApi";

const rootReducer = combineReducers({
  [movieApi.reducerPath]: movieApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(movieApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

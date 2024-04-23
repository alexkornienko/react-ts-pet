import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { moviePageApi, moviesApi } from "../services/movieApi";
import { searchApi } from "../services/searchApi";

const rootReducer = combineReducers({
  [moviesApi.reducerPath]: moviesApi.reducer,
  [moviePageApi.reducerPath]: moviePageApi.reducer,
  [searchApi.reducerPath]: searchApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        moviesApi.middleware,
        moviePageApi.middleware,
        searchApi.middleware
      ),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

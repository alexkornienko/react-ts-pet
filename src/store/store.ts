import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { moviePageApi, moviesApi, nowPlayingApi } from "../services/movieApi";
import { searchApi } from "../services/searchApi";

const rootReducer = combineReducers({
  [moviesApi.reducerPath]: moviesApi.reducer,
  [moviePageApi.reducerPath]: moviePageApi.reducer,
  [searchApi.reducerPath]: searchApi.reducer,
  [nowPlayingApi.reducerPath]: nowPlayingApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        moviesApi.middleware,
        moviePageApi.middleware,
        searchApi.middleware,
        nowPlayingApi.middleware
      ),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

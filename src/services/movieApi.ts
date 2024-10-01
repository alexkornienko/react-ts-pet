import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IMoviesResponse, IMoviesResponseWithDates } from "../types/movieCard";
import { IMoviePageResponse } from "../types/moviePage";

export const apiKey: string | undefined = process.env.REACT_APP_API_KEY;
export const baseUrl: string = "https://api.themoviedb.org/3/";
export const baseImageUrl: string = "https://image.tmdb.org/t/p/w500";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getMovies: builder.query<IMoviesResponse, void>({
      query: () =>
        `discover/movie?api_key=${apiKey}&language=ru-RU&sort_by=popularity.desc`,
    }),
  }),
});

export const { useGetMoviesQuery } = moviesApi;

export const moviePageApi = createApi({
  reducerPath: "moviePageApi",

  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getMoviePage: builder.query<IMoviePageResponse, string>({
      query: (movieId) => `movie/${movieId}?api_key=${apiKey}&language=ru-RU`,
    }),
  }),
});

export const { useGetMoviePageQuery } = moviePageApi;

export const nowPlayingApi = createApi({
  reducerPath: "nowPlayingApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getNowPlaying: builder.query<IMoviesResponseWithDates, void>({
      query: () => `movie/now_playing?api_key=${apiKey}&language=ru-RU`,
    }),
  }),
});

export const { useGetNowPlayingQuery } = nowPlayingApi;

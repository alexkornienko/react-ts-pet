import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IMoviesResponse } from "../types/movieCard";
import { IMoviePageResponse } from "../types/moviePage";

export const apiKey: string | undefined = process.env.REACT_APP_API_KEY;
export const baseUrl: string = "https://api.themoviedb.org/3/";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getMovies: builder.query<IMoviesResponse, void>({
      query: () =>
        `discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc`,
    }),
  }),
});

export const { useGetMoviesQuery } = moviesApi;

export const moviePageApi = createApi({
  reducerPath: "moviePageApi",

  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getMoviePage: builder.query<IMoviePageResponse, string>({
      query: (movieId) => `movie/${movieId}?api_key=${apiKey}`,
    }),
  }),
});

export const { useGetMoviePageQuery } = moviePageApi;

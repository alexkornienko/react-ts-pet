import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { apiKey } from "../constants";
import { IMoviesResponse } from "../types/movieCard";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  endpoints: (builder) => ({
    getMovies: builder.query<IMoviesResponse, void>({
      query: () =>
        `discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc`,
    }),
  }),
});

export const { useGetMoviesQuery } = movieApi;

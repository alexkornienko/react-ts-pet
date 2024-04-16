import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ISearchResponse } from "../types/searchList";

import { apiKey, baseUrl } from "./movieApi";

export const searchApi = createApi({
  reducerPath: "searchApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getSerchedList: builder.query<ISearchResponse, string>({
      query: (value: string) =>
        `search/movie?query=${value}&api_key=${apiKey}&language=ru-RU`,
    }),
  }),
});

export const { useGetSerchedListQuery, useLazyGetSerchedListQuery } = searchApi;

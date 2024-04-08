import React from "react";
import { useParams } from "react-router-dom";

import { useGetMoviePageQuery } from "../services/movieApi";

const MoviePage = () => {
  const params = useParams<{ id: string }>();
  const { data, isLoading, error } = useGetMoviePageQuery(params.id || "");

  return <div>{data?.title}</div>;
};

export default MoviePage;

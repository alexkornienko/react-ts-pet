import { useParams } from "react-router-dom";

import MovieListWrapper from "./MovieListWrapper";
import { useGetSerchedListQuery } from "../services/searchApi";

const MovieListSearched = () => {
  let { query } = useParams();
  const { data, isLoading, error } = useGetSerchedListQuery(query || "");

  return <MovieListWrapper data={data} isLoading={isLoading} error={error} />;
};

export default MovieListSearched;

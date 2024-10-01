import MovieListWrapper from "./MovieListWrapper";
import { useGetMoviesQuery } from "../services/movieApi";

const MovieList = () => {
  const { data, isLoading, error } = useGetMoviesQuery();

  return <MovieListWrapper data={data} isLoading={isLoading} error={error} />;
};

export default MovieList;

import { Col, Flex, Row, Spin, Typography } from "antd";
import { useGetMoviesQuery } from "../services/movieApi";
import { IMovieCard } from "../types/movieCard";
import MovieCard from "./MovieCard";

const MovieList = (): JSX.Element => {
  const { data, isLoading } = useGetMoviesQuery();

  return (
    <Flex gap="middle" align="center" vertical>
      <Typography.Title>Movies</Typography.Title>
      {isLoading ? (
        <>
          <Spin tip="Loading..." />
        </>
      ) : (
        <Row gutter={[16, 16]} justify="space-between">
          {data &&
            data.results.map((movie: IMovieCard) => (
              <Col span={8} key={movie.id}>
                <MovieCard {...movie} />
              </Col>
            ))}
        </Row>
      )}
    </Flex>
  );
};

export default MovieList;

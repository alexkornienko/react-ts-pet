import { Col, Empty, Flex, Row, Spin, Typography } from "antd";
import { useGetMoviesQuery } from "../services/movieApi";
import { IMovieCard } from "../types/movieCard";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const { data, isLoading, error } = useGetMoviesQuery();

  return (
    <Flex gap="middle" align="center" vertical>
      <Typography.Title>Movies</Typography.Title>
      {error && (
        <>
          <Typography.Title>Ошибка загрузки</Typography.Title>
          <Empty />
        </>
      )}
      {isLoading ? (
        <>
          <Spin />
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

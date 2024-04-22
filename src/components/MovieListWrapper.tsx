import { useNavigate } from "react-router-dom";
import { Col, Empty, Flex, Row, Spin, Typography } from "antd";

import { IMovieCard, IMoviesResponse } from "../types/movieCard";
import MovieCard from "./MovieCard";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

interface MovieListWrapperProps {
  isLoading?: boolean;
  error?: FetchBaseQueryError | SerializedError | undefined;
  data?: IMoviesResponse;
}

const MovieListWrapper = ({
  data,
  isLoading,
  error,
}: MovieListWrapperProps) => {
  const navigate = useNavigate();

  const handleGetMoviePage = (id: number) => {
    navigate(`/movies/${id}`);
  };

  return (
    <Flex gap="middle" align="center" vertical>
      <Typography.Title>Фильмы</Typography.Title>
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
                <MovieCard
                  {...movie}
                  onClick={handleGetMoviePage.bind(this, movie.id)}
                />
              </Col>
            ))}
        </Row>
      )}
    </Flex>
  );
};

export default MovieListWrapper;

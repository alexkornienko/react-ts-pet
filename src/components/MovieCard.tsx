import React from "react";
import { Card } from "antd";

import { IMovieCard } from "../types/movieCard";

const MovieCard = ({ poster_path, title, overview, onClick }: IMovieCard) => {
  return (
    <Card
      hoverable
      onClick={onClick}
      cover={
        <img
          alt="example"
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        />
      }
    >
      <Card.Meta title={title} description={overview} />
    </Card>
  );
};

export default MovieCard;

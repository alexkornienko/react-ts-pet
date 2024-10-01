import React from "react";
import { Card } from "antd";

import { IMovieCard } from "../types/movieCard";
import { baseImageUrl } from "../services/movieApi";

const MovieCard = ({ poster_path, title, overview, onClick }: IMovieCard) => {
  return (
    <Card
      hoverable
      onClick={onClick}
      cover={<img alt="example" src={`${baseImageUrl}${poster_path}`} />}
    >
      <Card.Meta title={title} description={overview} />
    </Card>
  );
};

export default MovieCard;

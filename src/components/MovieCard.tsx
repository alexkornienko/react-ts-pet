import { Card } from "antd";
import React from "react";
import { apiKey } from "../constants";
import { IMovieCard } from "../types/movieCard";

const MovieCard: React.FC<IMovieCard> = ({ poster_path, title, overview }) => {
  return (
    <Card
      hoverable
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

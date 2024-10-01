import React from "react";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y } from "swiper/modules";

import { baseImageUrl, useGetNowPlayingQuery } from "../../services/movieApi";
import { IMovieCard } from "../../types/movieCard";
import Average from "../../common/Average";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.css";

const NowAtCinema = () => {
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetNowPlayingQuery();

  const handleGetMoviePage = (id: number) => {
    navigate(`/movies/${id}`);
  };

  return (
    <Swiper
      modules={[Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={5}
      pagination={{ clickable: true }}
    >
      {data?.results.map((movie: IMovieCard) => (
        <SwiperSlide
          key={movie.id}
          onClick={handleGetMoviePage.bind(this, movie.id)}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              marginBottom: "40px",
              position: "relative",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              color: "white",
              borderRadius: "10px",
              padding: "6px 8px",
              height: "350px",
              width: "215px",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                backgroundImage: `url(${baseImageUrl}${movie.backdrop_path})`,
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <h1
                style={{
                  fontSize: "1.25rem",
                  textShadow: "2px 2px 6px rgba(0, 0, 0, 0.4)",
                  fontWeight: 500,
                }}
              >
                {movie.title}
              </h1>
              <div style={{ alignSelf: "end" }}>
                <Average average={movie.vote_average} sizeSmall />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default NowAtCinema;

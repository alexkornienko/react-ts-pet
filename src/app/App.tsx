import React from "react";
import { Typography } from "antd";
import { Route, Routes } from "react-router";

import MovieList from "../components/MovieList";
import MoviePage from "../components/MoviePage";
import MovieListSearched from "../components/MovieListSearched";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Typography.Title>Home</Typography.Title>} />
      <Route path="/movies" element={<MovieList />} />
      <Route path="/movies/:id" element={<MoviePage />} />
      <Route path="/search_movies/:query" element={<MovieListSearched />} />
      <Route
        path="/serials"
        element={<Typography.Title>serials</Typography.Title>}
      />
      <Route
        path="/profile"
        element={<Typography.Title>profile</Typography.Title>}
      />
    </Routes>
  );
}

export default App;

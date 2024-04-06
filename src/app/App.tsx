import { Typography } from "antd";
import React from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import MovieList from "../components/MovieList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Typography.Title>Home</Typography.Title>} />
      <Route path="/movies" element={<MovieList />} />
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

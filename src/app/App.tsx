import { Typography } from "antd";
import React from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import MovieList from "../components/MovieList";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">movies</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Typography.Title>Home</Typography.Title>} />
        <Route path="/movies" element={<MovieList />} />
      </Routes>
    </>
  );
}

export default App;

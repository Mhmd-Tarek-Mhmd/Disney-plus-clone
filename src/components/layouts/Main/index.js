import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Movie from "./Movie";
import NotFound from "./NotFound";

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/movie/:type/:title" element={<Movie />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

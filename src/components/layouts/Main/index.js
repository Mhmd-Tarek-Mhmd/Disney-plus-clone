import React from "react";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Movie from "./Movie";

function Main({ isAuthed }) {
  return (
    <main>
      <Routes>
        <Route path="/login" element={<Login />} />
        {isAuthed && (
          <>
            <Route path="" element={<Home />} />
            <Route path="/movie/:type/:title" element={<Movie />} />
          </>
        )}
      </Routes>
    </main>
  );
}

export default connect((state) => ({ isAuthed: state.auth }))(Main);

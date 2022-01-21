import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
}

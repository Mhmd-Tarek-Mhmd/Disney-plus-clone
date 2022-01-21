import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";

const Container = styled.main`
  overflow-x: hidden;
  position: relative;
  padding: 20px 24px 0;
  min-height: calc(100vh - 70px);
  &::before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    content: "";
    position: absolute;
    background: url(assists/images/bg/home.png) center center / cover no-repeat
      fixed;
  }
  & > * {
    margin-bottom: 30px
  }
`;

export default function Main() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Container>
  );
}

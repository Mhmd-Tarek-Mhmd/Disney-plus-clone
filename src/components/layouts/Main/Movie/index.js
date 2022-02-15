import React from "react";

import Container from "./styles";

export default function Movie() {
  const bg = {
    background:
      "url(/assists/images/bg/home.png) top center / cover no-repeat fixed",
  };

  return (
    <Container className="container" style={bg}>
      <div className="img-title">
        <img src="" alt="img" />
      </div>

      <div className="controls middle-flex">
        <button className="btn play middle-flex">
          <img src="/assists/images/icons/play-icon-black.png" alt="" />
          <span>Play</span>
        </button>
        <button className="btn trailer middle-flex">
          <img src="/assists/images/icons/play-icon-white.png" alt="" />
          <span>Trailer</span>
        </button>

        <button className="round-btn add" aria-label="Add">
          +
        </button>
        <button className="round-btn group" aria-label="Group watch">
          <img src="/assists/images/icons/group-icon.png" alt="" />
        </button>
      </div>

      <p className="subtitle">subtitle</p>

      <p className="desc">desc</p>
    </Container>
  );
}

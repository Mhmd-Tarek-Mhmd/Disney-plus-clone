import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import Container from "./styles";

function Movie({ movies }) {
  const { type, title } = useParams();
  const movie = movies[type].filter(
    (movie) => movie.title.toLowerCase().replaceAll(" ", "-") === title
  );
  const { backgroundImg, titleImg, subTitle, description } = movie[0];
  const bg = {
    background: `url(${backgroundImg}) no-repeat top center / cover`,
  };

  return (
    backgroundImg && (
      <Container className="container" style={bg}>
        <div className="img-title middle-flex">
          <img src={titleImg} alt={`${title} movie logo`} />
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

          <button className="round-btn add middle-flex" aria-label="Add">
            +
          </button>
          <button
            className="round-btn group middle-flex"
            aria-label="Group watch"
          >
            <img src="/assists/images/icons/group-icon.png" alt="" />
          </button>
        </div>

        <p className="subtitle">{subTitle}</p>

        <p className="desc">{description}</p>
      </Container>
    )
  );
}

export default connect((state) => ({
  movies: state.movies,
}))(Movie);

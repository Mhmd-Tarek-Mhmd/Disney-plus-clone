import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { handleGetMovies } from "../../../../store/actions";

import { Container, Title, ViewersGroup, MoviesGroup } from "./styles";
import Carousel from "./Carousel";

function Home({ movies, handleGetMovies }) {
  const cards = ["disney", "marvel", "national", "pixar", "starwars"];
  React.useEffect(handleGetMovies, [handleGetMovies]);

  const handleMouseEnter = (e) => {
    e.target.firstElementChild.classList.add("active");
    e.target.firstElementChild.play();
  };
  const handleMouseLeave = (e) => {
    e.target.firstElementChild.classList.remove("active");
  };

  return (
    <Container className="container">
      <Carousel />

      <ViewersGroup>
        {cards.map((card) => (
          <div
            className="card"
            key={card}
            onMouseEnter={(e) => handleMouseEnter(e)}
            onMouseLeave={(e) => handleMouseLeave(e)}
          >
            <video>
              <source src={`/assists/videos/${card}.mp4`} type="video/mp4" />
            </video>
            <img src={`/assists/images/viewers/${card}.png`} alt={card} />
          </div>
        ))}
      </ViewersGroup>

      {movies &&
        Object.keys(movies).map((movieType) => (
          <section className={movieType} key={movieType}>
            <Title>
              {movieType === "recommend" ? "Recommended for you" : movieType}
            </Title>

            <MoviesGroup>
              {movies[movieType].map((movie) => (
                <Link
                  to={`/movie/${movieType}/${movie.title
                    .toLowerCase()
                    .replaceAll(" ", "-")}`}
                  className="card"
                  key={movie.title}
                >
                  <img src={movie.cardImg} alt={`${movie.title} movie`} />
                </Link>
              ))}
            </MoviesGroup>
          </section>
        ))}
    </Container>
  );
}

export default connect(
  (state) => ({
    movies: state.movies,
  }),
  { handleGetMovies }
)(Home);

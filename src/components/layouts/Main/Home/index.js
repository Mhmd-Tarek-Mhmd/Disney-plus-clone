import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { handleGetMovies } from "../../../../store/actions";

import { Container, Title, ViewersGroup, MoviesGroup } from "./styles";
import Carousel from "./Carousel";

function Home({
  movies,
  recommend,
  newMovies,
  trending,
  original,
  handleGetMovies,
}) {
  const cards = ["disney", "marvel", "national", "pixar", "starwars"];
  React.useEffect(handleGetMovies, [handleGetMovies]);

  console.log();

  return (
    <Container className="container">
      <Carousel />

      <ViewersGroup>
        {cards.map((card) => (
          <div className="card" key={card}>
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

      {/* <section className="recommend">
        <Title>Recommended for you</Title>

        <MoviesGroup>
          {recommend &&
            recommend.map((movie) => (
              <Link
                to={`/movie/${movie.title.toLowerCase().replaceAll(" ", "-")}`}
                className="card"
                key={movie.title}
              >
                <img src={movie.cardImg} alt={`${movie.title} movie`} />
              </Link>
            ))}
        </MoviesGroup>
      </section>

       <section className="new">
        <Title>New</Title>

        <MoviesGroup>
          {newMovies &&
            newMovies.map((card) => (
              <Link to="/movie" className="card" key={card}>
                <img src={`/assists/images/viewers/${card}.png`} alt={card} />
              </Link>
            ))}
        </MoviesGroup>
      </section>

      <section className="trending">
        <Title>Trending</Title>

        <MoviesGroup>
          {trending &&
            trending.map((card) => (
              <Link to="/movie" className="card" key={card}>
                <img src={`/assists/images/viewers/${card}.png`} alt={card} />
              </Link>
            ))}
        </MoviesGroup>
      </section>

      <section className="original">
        <Title>Originals</Title>

        <MoviesGroup>
          {original &&
            original.map((card) => (
              <Link to="/movie" className="card" key={card}>
                <img src={`/assists/images/viewers/${card}.png`} alt={card} />
              </Link>
            ))}
        </MoviesGroup> 
      </section> */}
    </Container>
  );
}

export default connect(
  (state) => {
    const { movies } = state;
    return { movies };
    /*const recommend = movies.filter((movie) => movie.type === "recommend");
    const newMovies = movies.filter((movie) => movie.type === "new");
    const trending = movies.filter((movie) => movie.type === "trending");
    const original = movies.filter((movie) => movie.type === "original");*/

    /*return {
      recommend,
      newMovies,
      trending,
      original,
    };*/
  },
  { handleGetMovies }
)(Home);

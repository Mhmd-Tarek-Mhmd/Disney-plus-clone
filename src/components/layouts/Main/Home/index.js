import React from "react";
import { Link } from "react-router-dom";

import { Container, Title, ViewersGroup, MoviesGroup } from "./styles";
import Carousel from "./Carousel";

export default function Home() {
  const cards = ["disney", "marvel", "national", "pixar", "starwars"];

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

      <section className="recommended">
        <Title>Recommended for you</Title>

        <MoviesGroup>
          {cards.map((card) => (
            <Link to="/movie" className="card" key={card}>
              <img src={`/assists/images/viewers/${card}.png`} alt={card} />
            </Link>
          ))}
        </MoviesGroup>
      </section>

      <section className="new">
        <Title>New</Title>

        <MoviesGroup>
          {cards.map((card) => (
            <Link to="/movie" className="card" key={card}>
              <img src={`/assists/images/viewers/${card}.png`} alt={card} />
            </Link>
          ))}
        </MoviesGroup>
      </section>

      <section className="originals">
        <Title>Originals</Title>

        <MoviesGroup>
          {cards.map((card) => (
            <Link to="/movie" className="card" key={card}>
              <img src={`/assists/images/viewers/${card}.png`} alt={card} />
            </Link>
          ))}
        </MoviesGroup>
      </section>
    </Container>
  );
}

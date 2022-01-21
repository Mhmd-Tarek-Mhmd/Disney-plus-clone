import styled from "styled-components";

import Carousel from "./Carousel";
import CardsGroup from "./CardsGroup";

const ViewersGroup = styled(CardsGroup)`
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`;
const MoviesGroup = styled(CardsGroup)`
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;
const Title = styled.h2`
  @media (max-width: 589px) {
    text-align: center;
  }
`;

export default function Home() {
  const cards = ["disney", "marvel", "national", "pixar", "starwars"];

  return (
    <>
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
            <a href="/" className="card" key={card}>
              <img src={`/assists/images/viewers/${card}.png`} alt={card} />
            </a>
          ))}
        </MoviesGroup>
      </section>

      <section className="new">
        <Title>New</Title>

        <MoviesGroup>
          {cards.map((card) => (
            <a href="/" className="card" key={card}>
              <img src={`/assists/images/viewers/${card}.png`} alt={card} />
            </a>
          ))}
        </MoviesGroup>
      </section>

      <section className="originals">
        <Title>Originals</Title>

        <MoviesGroup>
          {cards.map((card) => (
            <a href="/" className="card" key={card}>
              <img src={`/assists/images/viewers/${card}.png`} alt={card} />
            </a>
          ))}
        </MoviesGroup>
      </section>
    </>
  );
}
import styled from "styled-components";

const Container = styled.div`
  overflow-x: hidden;
  &::before {
    background: url(/assists/images/bg/home.png) top center / cover no-repeat
      fixed;
  }
  & > * {
    margin-bottom: 30px;
  }
`;

const CardsGroup = styled.div`
  display: grid;
  grid-gap: 25px;
  padding: 30px 0 26px;

  .card {
    border-radius: 10px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
      rgba(0 0 0 / 73%) 0px 16px 10px -10px;

    &:hover {
      transform: scale(1.05);
      border-color: rgba(249, 249, 249, 0.8);
      box-shadow: rgba(0 0 0 / 80%) 0px 40px 58px -16px,
        rgba(0 0 0 / 72%) 0px 30px 22px -10px;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

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

export { Container, ViewersGroup, MoviesGroup, Title };

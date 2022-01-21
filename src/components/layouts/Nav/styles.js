import styled from "styled-components";

const breakPoint = 900;
const bgc = "#090b13";

export const Navigation = styled.nav`
  padding: 0 24px;
  min-height: 70px;
  position: relative;
  background-color: ${bgc};

  @media (max-width: ${breakPoint}px) {
    justify-content: space-between;

    .links-toggler {
      font-size: 25px;
      transform: scaleX(1.5);
    }
  }

  .logo {
    width: 80px;
  }

  @media (min-width: ${breakPoint + 1}px) {
    .links-toggler {
      display: none;
    }
  }

  .authed-user {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
`;

export const Links = styled.ul`
  flex: 1;
  @media (min-width: ${breakPoint + 1}px) {
    margin-left: 25px;
  }

  @media (max-width: ${breakPoint}px) {
    display: none;
    &.mobile-links {
      left: 0;
      right: 0;
      z-index: 1;
      display: grid;
      position: absolute;
      top: calc(100% + 2px);
      background-color: black;

      a {
        width: 100%;
        padding: 10px 0;
        justify-content: center;
        will-change: background-color;
        transition: background-color 0.3s;
        &:hover {
          background-color: ${bgc};
        }
      }
    }
  }

  a {
    gap: 2px;
    padding: 0 12px;
    &:hover {
      span::before {
        transform: scale(1);
      }
    }

    img {
      width: 20px;
      height: 20px;
    }

    span {
      font-size: 13px;
      position: relative;
      letter-spacing: 1.42px;
      @media (min-width: ${breakPoint + 1}px) {
        &::before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          height: 2px;
          bottom: -5px;
          transform: scale(0);
          background-color: white;
          transition-duration: 0.3s;
          transform-origin: left center;
        }
      }
    }
  }
`;

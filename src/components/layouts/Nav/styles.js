import styled from "styled-components";

const breakPoint = 900;
const bgc = "#090b13";

export const Navigation = styled.nav`
  padding: 0 24px;
  min-height: 70px;
  position: relative;
  background-color: ${bgc};
  justify-content: space-between;

  .links-toggler {
    @media (max-width: ${breakPoint}px) {
      font-size: 25px;
      transform: scaleX(1.5);
    }
    @media (min-width: ${breakPoint + 1}px) {
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
  justify-content: center;

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

export const LoginBtn = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  text-transform: uppercase;
  transition: 0.2s ease-in-out 0s;
  background-color: rgba(0, 0, 0, 0.6);
  will-change: color, background-color;
  &:hover {
    color: #000;
    background-color: #f9f9f9;
  }
`;

import styled from "styled-components";

const Container = styled.div`
  &::before {
    background: url(/assists/images/bg/login.jpg) top center / cover no-repeat
      fixed;
  }

  div {
    width: 90%;
    display: grid;
    max-width: 650px;
    text-align: center;
    margin: 13vh auto 0;
    justify-items: center;
  }

  img {
    max-width: 100%;
  }

  a {
    width: 100%;
    color: #f9f9f9;
    padding: 17px 0;
    font-size: 18px;
    font-weight: bold;
    border-radius: 4px;
    margin: 8px 0 12px;
    background-color: #0063e5;
    will-change: background-color;
    transition: background-color 250ms;
    &:hover {
      background-color: #0483ee;
    }
  }

  p {
    font-size: 11px;
    line-height: 1.5;
    letter-spacing: 1.5px;
  }

  img:last-child {
    width: 90%;
    margin-top: 10px;
  }
`;

export default Container;

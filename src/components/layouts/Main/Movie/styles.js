import styled from "styled-components";

const Container = styled.div`
  .img-title {
    width: 35vw;
    height: 30vh;
    margin-bottom: 20px;

    img {
      width: 250px;
    }
  }

  .controls {
    gap: 16px;

    .btn {
      height: 58px;
      padding: 0 24px;
      font-size: 15px;
      border-radius: 4px;
      letter-spacing: 1.8px;
      text-transform: uppercase;
      will-change: background-color;
      &.play {
        color: #000;
        background-color: rgb(249, 249, 249);
      }
      &.trailer {
        color: rgb(249, 249, 249);
        background-color: rgba(0, 0, 0, 0.3);
        border: 1px solid rgb(249, 249, 249);
      }
      &:hover {
        background-color: rgb(198, 198, 198);
      }
    }

    .round-btn {
      width: 48px;
      height: 48px;
      font-size: 30px;
      cursor: pointer;
      border: 2px solid;
      border-radius: 50%;
      justify-content: center;
      &.add {
        background-color: rgba(0, 0, 0, 0.6);
      }
      &.group {
        background-color: rgb(0, 0, 0);
      }
    }
  }

  p {
    color: rgba(249, 249, 249);
  }
  .subtitle {
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
  }
  .desc {
    width: 50%;
    font-size: 18px;
    line-height: 1.4;
    margin-top: 16px;
  }
`;

export default Container;

import Slider from "react-slick";
import styled from "styled-components";

const SimpleSlider = styled(Slider)`
  user-select: none;
  position: relative;
  touch-action: pan-y;
  -khtml-user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
  .slick-list,
  .slick-track {
    transform: translate3d(0, 0, 0);
  }
  .slick-loading .slick-slide,
  .slick-loading .slick-track {
    visibility: hidden;
  }

  /*
    [1] List
  */

  .slick-list {
    &:focus {
      outline: 0;
    }
    &.dragging {
      cursor: pointer;
      cursor: hand;
    }

    /* track */

    .slick-track {
      top: 0;
      left: 0;
      &:after,
      &:before {
        display: table;
        content: "";
      }
      &:after {
        clear: both;
      }
    }
  }

  /* slide */

  .slick-slide {
    float: left;
    height: 100%;
    display: none;
    min-height: 1px;
    img {
      width: 100%;
      height: 100%;
      display: block;
      border-radius: 4px;
      will-change: border-color;
      transition-duration: 300ms;
      border: 4px solid transparent;
      box-shadow: rgba(0 0 0 / 60%) 0px 26px 30px -10px,
        rgba(0 0 0 / 73%) 0px 16px 10px -10px;

      &:hover {
        border-color: rgba(249, 249, 249, 0.8);
      }
    }
    &.slick-loading img {
      display: none;
    }
    &.dragging img {
      pointer-events: none;
    }
  }
  &.slick-initialized .slick-slide {
    display: block !important;
  }

  /*
    [2] Dots
  */

  .slick-dots {
    width: 100%;
    bottom: -25px;
    text-align: center;
    position: absolute;

    li {
      width: 20px;
      height: 20px;
      margin: 0 5px;
      cursor: pointer;
      position: relative;
      display: inline-block;
      &.slick-active button:before {
        opacity: 0.75;
        color: white;
      }
    }

    button {
      outline: 0;
      cursor: pointer;
      color: transparent;
      &::before {
        top: 0;
        left: 0;
        width: 20px;
        height: 20px;
        content: "•";
        opacity: 0.25;
        line-height: 20px;
        position: absolute;
        text-align: center;
        color: rgb(150, 150, 171);
        will-change: color, opacity;
      }
      &:focus::before,
      &:hover::before {
        opacity: 1;
      }
    }
  }
`;

export default SimpleSlider;

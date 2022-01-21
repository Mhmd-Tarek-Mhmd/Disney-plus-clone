import SimpleSlider from "./styles";

export default function Carousel() {
  const settings = {
    speed: 500,
    dots: true,
    arrows: false,
    autoplay: true,
    swipeToSlide: true,
  };

  return (
    <SimpleSlider {...settings}>
      {[1, 2, 3, 4].map((slide) => (
        <a href="/" key={slide}>
          <img src={`/assists/images/slider/${slide}.jpg`} alt="" />
        </a>
      ))}
    </SimpleSlider>
  );
}

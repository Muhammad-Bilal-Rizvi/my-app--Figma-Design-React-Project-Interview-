import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SixCards = ({ data }) => {
  const sliderRef = useRef(null);
  const settings = {
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 2400,
        settings: "unslick",
      },
    ],
  };
  return (
    <div className="cards-cotainer">
      <Slider ref={sliderRef} {...settings}>
        {data.map(({ title, description, icon }) => (
          <div className="custom-card">
            <div className="icon-container">{icon}</div>
            <p className="card-one-heading">{title}</p>
            <p className="card-one-para">{description}</p>
          </div>
        ))}
      </Slider>
      <div className="swap-btn">
        <button onClick={() => sliderRef.current.slickPrev()} className="left-arrow-btn">
          <i className="fas fa-arrow-left"></i>
        </button>
        <button onClick={() => sliderRef.current.slickNext()} className="right-arrow-btn">
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default SixCards;

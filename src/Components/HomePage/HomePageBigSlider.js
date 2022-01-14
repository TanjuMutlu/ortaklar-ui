import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/slider styles/HomePageBigSlider.scss";
import BigSliderItem from "../Cards/BigSliderItemCard";
import PepinoYesilTuruncu from "../Cards/CardMedia/pepino-yesil-turuncu.png";
import deneme from "../Cards/CardMedia/headerlogo.svg";

export default class HomePageBigSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider
          {...settings}
          dotsClass="slick-dots line-indicator"
          customPaging={(i) => (
            <div
              style={{
                position: "absolute",
                width: "100%",
                top: "-10px",
                opacity: 0,
              }}
            >
              {i}
            </div>
          )}
        >
          {[
            ["Global markalar yeni sezona hazır!", "İleri teknolojimiz ve yetişmiş insan gücümüzle,  birçok markanın tedarikçiliğini üstlenerek yılda 1 milyon çift ayakkabı üretiyoruz.", PepinoYesilTuruncu],
            ["title2", "body2", deneme],
            ["title3", "body3", PepinoYesilTuruncu],
            ["title4", "body4", deneme],
          ].map((i) => (
            <BigSliderItem title={i[0]} body={i[1]} img={i[2]} />
          ))}
        </Slider>
      </div>
    );
  }
}

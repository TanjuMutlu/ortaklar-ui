import React, { Component, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/slider styles/HomeCardSlider.scss";
import { ButtonBase, Typography } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Card from "../Cards/ProductCard";
import pepinoYesilTuruncu from "../Cards/CardMedia/pepino-yesil-turuncu.png";
import ortaklar from "../Cards/CardMedia/headerlogo.svg";

const HomePageCardSlider = () => {
  const sliderRef = useRef(null);
  useEffect(() => {
    console.log(sliderRef);
  }, []);

  return (
    <div className="main-div">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 10px",
        }}
      >
        <div className="buttons">
          <ButtonBase
            className="buttonPrev"
            onClick={() => sliderRef.current.slickPrev()}
            disableRipple={true}
          >
            <ArrowBackIos color={"secondary"} fontSize="large" />
          </ButtonBase>

          <ButtonBase
            className="buttonNext"
            onClick={() => sliderRef.current.slickNext()}
            disableRipple={true}
          >
            <ArrowForwardIos color="secondary" fontSize="large" />
          </ButtonBase>
        </div>
      </div>

      <div className="slider-div">
        <Typography
          className="title"
          color="primary"
          variant="subtitle1"
          sx={{ maxWidth: 630 }}
        >
          Yeni sezon çocuk modası :)
        </Typography>
        <br></br>
        <Slider
          ref={sliderRef}
          speed={500}
          slidesToShow={4}
          slidesToScroll={1}
          infinite={false}
          arrows={false}
          dots={true}
          dotsClass="slick-dots line-indicator-card"
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
            ["title", "body", pepinoYesilTuruncu, "/"],
            ["title2", "body2", ortaklar, "/"],
            ["title3", "body3", pepinoYesilTuruncu, "/"],
            ["title4", "body4", ortaklar, "/"],
            ["title5", "body5", pepinoYesilTuruncu, "/"],
            ["title6", "body6", ortaklar, "/"],
            ["title7", "body7", ortaklar, "/"],

          ].map((i) => (
            <Card title={i[0]} body={i[1]} img={i[2]} cardLink={i[3]} />
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default HomePageCardSlider;

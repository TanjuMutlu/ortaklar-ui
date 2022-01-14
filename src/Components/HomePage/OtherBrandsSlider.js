import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/slider styles/OtherBrands.scss";
import { Typography } from "@mui/material";
import ayakkabiDunyasi from "./img/ayakkabiDunyasi.png";
import boyner from "./img/boyner.png";
import civil from "./img/civil.png";
import defacto from "./img/defacto.png";
import deichmann from "./img/deichmann.png";
import fila from "./img/fila.png";
import flo from "./img/flo.png";
import hummel from "./img/hummel.png";
import lumberjack from "./img/lumberjack.png";
import mp from "./img/MP.png";
import polo from "./img/polo.png";

export default class SliderPostBox extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 6.5,
      slidesToScroll: 3,
    };
    return (
      <>
        <div className="main-brands">
          <Typography
            variant="subtitle1"
            sx={{ fontSize: "32px" }}
            className="title-brands"
          >
            Değerli markalarımız
          </Typography>
          <Slider {...settings}>
            {[
              [ayakkabiDunyasi, "ayakkabiDunyasi"],
              [boyner, "boyner"],
              [civil,"civil"],
              [flo,"flo"],
              [hummel,"hummel"],
              [lumberjack,"lumberjack"],
              [mp,"mp"],
              [polo,"polo"],
            ].map((i) => (
              <img id={i[1]} src={i[0]} className={"brand-logo"} />
            ))}
          </Slider>
        </div>
      </>
    );
  }
}

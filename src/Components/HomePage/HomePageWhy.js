import { Typography, Paper } from "@mui/material";
import * as React from "react";
import makeStyles from "@mui/styles/makeStyles";
import WhyImg from "./img/WhyImg";
import blueshoe from "./img/blue-shoe.png";
import circle from "./img/circle-big.png";
import ellipse from "./img/ellipse-thin.png";
import icons from "./img/icons.svg";

const useStyles = makeStyles((theme) => ({
  main: {
    position: "relative",
    margin: "auto",
    maxWidth: "1600px",
    height: "800px",
  },
  title: {
    marginTop: "100px",
    marginLeft: "100px",
    height: "66px",
    fontStyle: "normal",
    fontSize: "56px",
    lineHeight: "66px",
  },
  layer1: {
    position: "absolute",
    left: "5%",
    top: "35%",
  },
  layer2: {
    position: "absolute",
    left: "14%",
    top: "40%",
  },
  layer3: {
    position: "absolute",
    left: "10%",
    top: "33%",
  },
  icons: {
    position: "absolute",
    left: "35%",
    top: "-20%",
    zIndex: 0,
  },
  smalltitles: {
    position: "absolute",
    left: "60%",
    top: "15%",
  },
  smalltitle1: { paddingTop: "140px" },
  smalltitle2: { paddingTop: "140px" },
  smalltitle3: { paddingTop: "120px" },

  titlebodys: {
    position: "absolute",
    left: "60%",
    top: "26%",
  },
  titlebody1: { paddingTop: "90px", fontSize: "18px", marginRight: "20px" },
  titlebody2: { paddingTop: "80px", fontSize: "18px", marginRight: "20px" },
  titlebody3: { paddingTop: "80px", fontSize: "18px", marginRight: "20px" },
}));

export default function Why({}) {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Typography variant="subtitle1" className={classes.title}>
        Neden Birlikte Uretmeliyiz?{" "}
      </Typography>

      <img className={classes.layer3} src={ellipse} />
      <img className={classes.layer2} src={circle} />
      <img className={classes.layer1} src={blueshoe} />
      <img className={classes.icons} src={icons} />

      <div className={classes.smalltitles}>
        <Typography variant="subtitle2" className={classes.smalltitle1}>
          AR-GE
        </Typography>

        <Typography variant="subtitle2" className={classes.smalltitle2}>
          ??hracat{" "}
        </Typography>

        <Typography variant="subtitle2" className={classes.smalltitle3}>
          Yerel ??retim{" "}
        </Typography>
      </div>

      <div className={classes.titlebodys}>
        <Typography className={classes.titlebody1} color="primary">
          D??nya pazarlar??ndaki zorlu rekabeti s??rd??rebilmenin ve daima iyi ??r??n
          ??retebilmenin en ??nemli ko??ulunun teknolojik geli??me olmas?? bilinciyle
          AR-Ge???ye b??y??k ??nem vermektedir.
        </Typography>

        <Typography className={classes.titlebody2} color="primary">
          T??rkiye'de sekt??r??nde lider markalar olmak ??zere Avrupa'da 14 ??lkeye
          ihracat yapmaktad??r.
        </Typography>

        <Typography className={classes.titlebody3} color="primary">
          Tamam?? T??rkiye'de ??retilen ??r??nleri ile sekt??r??nde yaratt?????? istihdam
          ??lke ekonomisine katk??da bulunur.
        </Typography>
      </div>
    </div>
  );
}

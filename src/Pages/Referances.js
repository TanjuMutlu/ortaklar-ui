import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography, Card } from "@mui/material";
import pinkRectangle from "../Components/Referances/img/pinkRectangle.svg";
import dots from "../Components/Referances/img/dots.svg";
import flo from "../Components/Referances/img/flo.png";
import fila from "../Components/Referances/img/fila.png";
import ayakkabiDunyasi from "../Components/Referances/img/ayakkabiDunyasi.png";
import boyner from "../Components/Referances/img/boyner.png";
import civil from "../Components/Referances/img/civil.png";
import defacto from "../Components/Referances/img/defacto.png";
import deichmann from "../Components/Referances/img/deichmann.png";
import hummel from "../Components/Referances/img/hummel.png";
import polo from "../Components/Referances/img/polo.png";
import lumberjack from "../Components/Referances/img/lumberjack.png";
import mp from "../Components/Referances/img/MP.png";

const useStyles = makeStyles((theme) => ({
  main: {
    background: "linear-gradient(360deg, #FFF 0%, #F4F5F7 100%)",
    maxWidth: "1600px",
    margin: "auto",
  },
  texts: { position: "absolute", paddingTop: "50px" },
  pinkRectangle: { position: "absolute", marginLeft: "52%" },
  dots: { position: "absolute", margin: "150px 0 0 85.3%" },
  brandCards: { position: "relative", margin: "15% 0 0 20%" },
  card: { width: "240px", height: "120px", margin: "auto" },
  cardImg: {
    maxHeight: "100px",
    maxWidth: "180px",
    position: "relative",
    margin: "auto",
    display: "block",
  },
  cardImgWrap: {
    height: "70px",
    width: "fit-content",
    marginTop: "10%",
    margin: "auto",
  },
}));

export default function Referances() {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.main}>
        <img src={pinkRectangle} className={classes.pinkRectangle} />
        <img src={dots} className={classes.dots} />
        <Grid
          container
          item
          xs={12}
          justifyContent="center"
          className={classes.texts}
          rowSpacing={3}
        >
          <Grid item xs={7}>
            <Typography variant="subtitle1">Referanslar</Typography>
          </Grid>
          <Grid item xs={6} style={{ marginRight: "200px" }}>
            <Typography variant="body2">
              ??leri teknolojimiz ve yeti??mi?? insan g??c??m??zle, bir??ok markan??n
              tedarik??ili??ini ??stlenerek y??lda 1 milyon ??ift ayakkab??
              ??retiyoruz.
            </Typography>
          </Grid>
        </Grid>
        <Grid container xs={7} className={classes.brandCards} spacing={3}>
          {[
            boyner,
            flo,
            ayakkabiDunyasi,
            hummel,
            fila,
            civil,
            defacto,
            deichmann,
            lumberjack,
            mp,
            polo,
          ].map((i) => (
            <Grid item>
              <Card elevation={2} className={classes.card}>
                <div className={classes.cardImgWrap}>
                  <img src={i} className={classes.cardImg} />
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
}

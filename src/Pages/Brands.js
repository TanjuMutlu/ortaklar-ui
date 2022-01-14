import React, { useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography, Button } from "@mui/material";
import OfferAndDownload from "../Components/HomePage/Offer&Download";
import Line from "../Components/About/img/Line.svg";
import Pepino from "../Components/Brands/PepinoPage";
import Flyer from "../Components/Brands/FlyerPage";
import Lilypari from "../Components/Brands/LilypariPage";

const useStyles = makeStyles((theme) => ({
  main: {
    background: "linear-gradient(360deg, #FFF 0%, #F4F5F7 100%)",
    maxWidth: "1600px",
    margin: "auto",
  },
  buttonText: { fontSize: "18px", lineHeight: "25px", textTransform: "none" },
  brandsTitle: {
    marginTop: "80px",
  },
  line: { marginTop: "20px" },
}));

export default function Brands() {
  const [active, setActive] = useState("pepino");
  const classes = useStyles();
  return (
    <>
      <Grid
        className={classes.main}
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          container
          item
          alignItems="center"
          justifyContent="center"
          spacing={8}
        >
          <Grid item xs={7}>
            <Typography
              variant="subtitle1"
              className={classes.brandsTitle}
              color="primary"
            >
              Markalar
            </Typography>
          </Grid>

          <Grid item xs={7}>
            <Button
              onClick={() => setActive("pepino")}
              style={{ background: 0 }}
              disableRipple={1}
            >
              <Typography color="primary" className={classes.buttonText}>
                Pepino
              </Typography>
            </Button>
            <Button
              onClick={() => setActive("flyer")}
              style={{ background: 0 }}
              disableRipple={1}
            >
              <Typography color="primary" className={classes.buttonText}>
                Flyer
              </Typography>
            </Button>
            <Button
              onClick={() => setActive("lilypari")}
              style={{ background: 0 }}
              disableRipple={1}
            >
              <Typography color="primary" className={classes.buttonText}>
                Lilypary
              </Typography>
            </Button>
          </Grid>
        </Grid>
        <img src={Line} className={classes.line} />
        {active === "pepino" && <Pepino />}
        {active === "flyer" && <Flyer />}
        {active === "lilypari" && <Lilypari />}
        <Grid container item xs={12} style={{ marginTop: "200px" }}>
          <OfferAndDownload />
        </Grid>
      </Grid>
    </>
  );
}

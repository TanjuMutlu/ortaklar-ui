import React, { useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography, Button } from "@mui/material";
import Line from "../Components/About/img/Line.svg";
import CenterPage from "../Components/Contact/CenterPage";
import ProductionPage from "../Components/Contact/ProductionPage";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "1600px",
    margin: "auto",
  },
  buttonText: { fontSize: "18px", lineHeight: "25px", textTransform: "none" },
  brandsTitle: {
    marginTop: "80px",
    background: "linear-gradient(360deg, #FFF 0%, #F4F5F7 100%)",
  },
  title: { marginLeft: "22%" },
  line: { marginTop: "20px" },
}));

export default function Contact() {
  const [active, setActive] = useState("center");
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.main}>
        <Grid
          container
          item
          alignItems="center"
          justifyContent="center"
          spacing={8}
        >
          <Grid item xs={12} className={classes.brandsTitle}>
            <Typography
              variant="subtitle1"
              color="primary"
              className={classes.title}
            >
              Iletisim
            </Typography>
          </Grid>

          <Grid item xs={7}>
            <Button
              onClick={() => setActive("center")}
              style={{ background: 0 }}
              disableRipple={1}
            >
              <Typography color="primary" className={classes.buttonText}>
                Merkez
              </Typography>
            </Button>
            <Button
              onClick={() => setActive("production")}
              style={{ background: 0 }}
              disableRipple={1}
            >
              <Typography color="primary" className={classes.buttonText}>
                Uretim
              </Typography>
            </Button>
          </Grid>
        </Grid>
        <img src={Line} className={classes.line} />
        {active === "center" && <CenterPage />}
        {active === "production" && <ProductionPage />}
      </Grid>
    </>
  );
}

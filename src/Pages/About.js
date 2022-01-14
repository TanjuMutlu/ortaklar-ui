import React, { useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography, Button } from "@mui/material";
import Line from "../Components/About/img/Line.svg";
import HistoryPage from "../Components/About/history";
import PoliticiesPage from "../Components/About/politicies";
import WhyUsPage from "../Components/About/whyUs";
import CompanyInfoPage from "../Components/About/companyInfo";
// import screenfull from 'screenfull';

const useStyles = makeStyles((theme) => ({
  main: {
    background: "linear-gradient(360deg, #FFF 0%, #F4F5F7 100%)",
    mixBlendMode: "normal",
    maxWidth: "1600px",
    margin: "auto",
  },
  about: {
    marginTop: "80px",
  },
  line: { marginTop: "20px" },
  buttonText: { fontSize: "18px", lineHeight: "25px", textTransform:'none'},
}));

export default function About() {
  const [active, setActive] = useState("tarihcemiz");
  const classes = useStyles();
  return (
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
            className={classes.about}
            color="primary"
          >
            Hakkimizda
          </Typography>
        </Grid>

        <Grid item xs={7}>
          <Button
            onClick={() => setActive("tarihcemiz")}
            style={{ background: 0 }}
            disableRipple={1}
          >
            <Typography color='primary' className={classes.buttonText}> Tarihcemiz</Typography>
          </Button>
          <Button
            onClick={() => setActive("politikalar")}
            style={{ background: 0 }}
            disableRipple={1}
          >
            <Typography color='primary' className={classes.buttonText}> Politikalar</Typography>
          </Button>
          <Button
            onClick={() => setActive("nedenbiz")}
            style={{ background: 0 }}
            disableRipple={1}
          >
            <Typography color='primary' className={classes.buttonText}> Neden Biz?</Typography>
          </Button>
          <Button
            onClick={() => setActive("sirketbilgileri")}
            style={{ background: 0 }}
            disableRipple={1}
          >
            <Typography color='primary' className={classes.buttonText}>
              Sirket Bilgileri
            </Typography>
          </Button>
        </Grid>
      </Grid>

      <img src={Line} className={classes.line} />

      {active === "tarihcemiz" && <HistoryPage />}
      {active === "politikalar" && <PoliticiesPage />}
      {active === "nedenbiz" && <WhyUsPage />}
      {active === "sirketbilgileri" && <CompanyInfoPage />}

    </Grid>
  );
}

import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography, Button } from "@mui/material";
import Img from "./img/pepinoShoe.svg";
import img1 from "./img/pepinoShoe.svg";
import img2 from "./img/pepinoShoe.svg";
import img3 from "./img/pepinoShoe.svg";
import img4 from "./img/pepinoShoe.svg";
import Card from "../Cards/ProductCard";

const useStyles = makeStyles((theme) => ({
  main: { marginTop: "30px" },
  titleText: { paddingTop: "8%" },
  buttonUnderLine: {
    width: "60px",
    height: "4px",
    position: "absolute",
    background: "#D50000",
    marginLeft: "-51.3%",
    marginTop: "-97.2%",
    borderRadius: "4px",
  },
  button: {
    color: "#fff",
    width: "170px",
    height: "48px",
  },
}));

export default function Pepino() {
  const classes = useStyles();

  return (
    <>
      <Grid
        className={classes.main}
        container
        justifyContent="center"
        alignItems="center"
        rowSpacing={5}
      >
        <div className={classes.buttonUnderLine} />
        <Grid item>
          <img src={Img} />
        </Grid>
        <Grid container item xs={9}>
          <Typography>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation veniam consequat sunt nostrud
            amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
            non deserunt ullamco est sit aliqua dolor do amet sint.
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <Typography variant="subtitle1">Favori modellerimiz</Typography>
          </Grid>
        </Grid>

        <Grid container item columnSpacing={1} xs={12} justifyContent="center">
          <Grid item>
            <Card title={"deneme"} body={"DENME"} img={img1} />
          </Grid>
          <Grid item>
            <Card title={"deneme2"} body={"DENME"} img={img2} />
          </Grid>
          <Grid item>
            <Card title={"deneme3"} body={"DENME"} img={img3} />
          </Grid>
          <Grid item>
            <Card title={"deneme4"} body={"DENME"} img={img4} />
          </Grid>
        </Grid>
        <Grid item>
          <Button
            className={classes.button}
            disableRipple={true}
            style={{ backgroundColor: "#D50000" }}
          >
            Hepsini Incele
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

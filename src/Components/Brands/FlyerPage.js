import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  titleText: { paddingTop: "8%" },
  buttonUnderLine: {
    width: "80px",
    height: "4px",
    position: "absolute",
    background: "#D50000",
    marginLeft: "7.1%",
    marginTop: "-0.4%",
    borderRadius: "4px",
  },
}));

export default function Flyer() {
  const classes = useStyles();

  return (
    <>
      <Grid container>
      FLYER PAGE
      </Grid>
    </>
  );
}

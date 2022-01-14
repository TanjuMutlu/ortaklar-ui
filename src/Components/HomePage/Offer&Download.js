import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography, Button } from "@mui/material";
import news from "./img/news.svg";

const useStyles = makeStyles((theme) => ({
  main: {
    position: 'relative',
    marginTop: "-150px",
    margin: "auto",
    width: "100%",
    maxWidth: "1600px",
    height: "450px",
  },
  offer: { background: "#F4F5F7" },
  catalog: { background: "#FBEFEF" },
  title: {
    lineHeight: "50px",
    fontSize: "40px",
    marginLeft: "70px",
    marginTop: "100px",
  },
  body: {
    color: "#000",
    fontSize: "22px",
    maxWidth: "530px",
    marginLeft: "70px",
    marginTop: "10px",
  },
  button: {
    color: "#fff",
    width: "170px",
    height: "48px",
    left: "70px",
    marginTop: "15px",
  },
  img: { position: "absolute", bottom: "00px", right: "100px" },
}));

export default function OfferDownload() {
  const classes = useStyles();
  return (
    <Grid container spacing={0} direction="row" className={classes.main}>
      <Grid
        container
        item
        xs={6}
        spacing={0}
        direction="row"
        className={classes.offer}
      >
        <Grid container item direction="column">
          <Typography variant="subtitle2" className={classes.title}>
            Teklif Alın
          </Typography>
          <Typography variant="body1" className={classes.body}>
            İleri teknolojimiz ve yetişmiş insan gücümüzle, 4500’den fazla
            ayakkabı modelimiz için teklif alın
          </Typography>
          <Button
            className={classes.button}
            disableRipple={true}
            style={{ backgroundColor: "#D50000" }}
          >
            Teklif Al
          </Button>
        </Grid>
      </Grid>

      <Grid container item xs={6} spacing={0} className={classes.catalog}>
        <Grid container item direction="column">
          <Typography variant="subtitle2" className={classes.title}>
            Ürün kataloğumuzu indirin
          </Typography>
          <Typography variant="body1" className={classes.body}>
            Her gün 4500’den fazla ürettiğimiz ayakkabı modellerimizi inceleyin.
            İstediğiniz zaman teklif alın
          </Typography>
          <Button
            className={classes.button}
            disableRipple={true}
            style={{ backgroundColor: "#D50000" }}
          >
            Kataloğu İndir
          </Button>
          <img className={classes.img} src={news} />
        </Grid>
      </Grid>
    </Grid>
  );
}

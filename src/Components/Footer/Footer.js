import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography, Button } from "@mui/material";
import ortaklar from "./img/ortaklar.svg";
import madeinturkey from "./img/Madeinturkey.svg";
import line from "./img/Line.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Twitter, Facebook, LinkedIn } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: "65px",
    margin: "auto",
    width: "100%",
    maxWidth: "1600px",
    height: "390px",
  },
  adress: {
    fontSize: "18px",
    lineHeight: "28px",
    maxWidth: "300px",
    marginLeft: "130px",
  },
  img1: { marginLeft: "130px", paddingBottom: "10px", paddingTop: "70px" },
  img2: { paddingLeft: "20px" },
  img3: { marginTop: "50px", maxWidth: '100%' },
  title: {
    fontWeight: "bold",
    fontSize: "22px",
    marginLeft: "70px",
    marginTop: "60px",
  },
  buttons: { marginLeft: "63px", paddingTop: "15px" },
  button: { fontSize: "18px", textTransform: "none" },
  button2: { fontSize: "14px", textTransform: "none" },
  logo: { marginRight: "20px", "&:hover": { color: "#D50000" } },
  logos: { marginLeft: "80%", marginTop: "3px" },
  button2Container: { position: "absolute", marginRight: "770px" },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.main}>
      <Grid container item xs={9} direction="row" className={classes.grid}>
        <Grid item xs={6}>
          <img src={ortaklar} className={classes.img1} />
          <img src={madeinturkey} className={classes.img2} />
          <Typography className={classes.adress}>
            Yakuplu Mahallesi, Dereboyu Caddesi Beysan Sanayi Sitesi No:3,
            Beylikdüzü/İstanbul
          </Typography>
        </Grid>

        <Grid conteiner item xs={3}>
          <Typography item variant="subtitle2" className={classes.title}>
            Kurumsal
          </Typography>

          <Grid item direction="column" xs={6} className={classes.buttons}>
            <Button
              href="/about"
              disableRipple={true}
              className={classes.button}
              style={{ background: "transparent" }}
            >
              <Typography variant="h6" color="#6B7588">
                Tarihçemiz
              </Typography>
            </Button>
            <Button
              href="/about"
              disableRipple={true}
              className={classes.button}
              style={{ background: "transparent" }}
            >
              <Typography variant="h6" color="#6B7588">
                Politikarımız
              </Typography>
            </Button>
            <Button
              href="/about"
              disableRipple={true}
              className={classes.button}
              style={{ background: "transparent" }}
            >
              <Typography variant="h6" color="#6B7588">
                Sosyal Sorumluluk
              </Typography>
            </Button>
            <Button
              href="/about"
              disableRipple={true}
              className={classes.button}
              style={{ background: "transparent" }}
            >
              <Typography variant="h6" color="#6B7588">
                İnsan Kaynakları
              </Typography>
            </Button>
            <Button
              href="/about"
              disableRipple={true}
              className={classes.button}
              style={{ background: "transparent" }}
            >
              <Typography variant="h6" color="#6B7588">
                Marka Kılavuzu
              </Typography>
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={3}>
          <Typography variant="subtitle2" className={classes.title}>
            Markalarımız
          </Typography>

          <Grid item xs={4} className={classes.buttons}>
            <Button
              href="/about"
              disableRipple={true}
              className={classes.button}
              style={{ background: "transparent" }}
            >
              <Typography variant="h6" color="#6B7588">
                Pepino
              </Typography>
            </Button>
            <Button
              href="/about"
              disableRipple={true}
              className={classes.button}
              style={{ background: "transparent" }}
            >
              <Typography variant="h6" color="#6B7588">
                Flyer
              </Typography>
            </Button>
            <Button
              href="/about"
              disableRipple={true}
              className={classes.button}
              style={{ background: "transparent" }}
            >
              <Typography variant="h6" color="#6B7588">
                Lilypari
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs>
        <img src={line} className={classes.img3} />
      </Grid>

      <Grid container xs justifyContent="center" direction="row">
        <div className={classes.logos}>
          <Twitter className={classes.logo} />
          <Facebook className={classes.logo} />
          <LinkedIn className={classes.logo} />
        </div>

        <Grid
          container
          xs={4}
          justifyContent="center"
          direction="row"
          className={classes.button2Container}
        >
          <Button
            href="/about"
            disableRipple={true}
            className={classes.button2}
            style={{ background: "transparent" }}
          >
            <Typography variant="h6" color="#6B7588">
              Gizlilik ve Çerez Politikası
            </Typography>
          </Button>
          <Button
            href="/about"
            disableRipple={true}
            className={classes.button2}
            style={{ background: "transparent" }}
          >
            <Typography variant="h6" color="#6B7588">
              Kişisel Verilerin Korunması
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

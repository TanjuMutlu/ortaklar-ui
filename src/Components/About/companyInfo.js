import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography } from "@mui/material";
import garanti from "./img/garanti.png";
import yapikredi from "./img/yapikredi.png";

const useStyles = makeStyles((theme) => ({
  titleText: { paddingTop: "8%" },
  garanti: { padding: "13px 50px 0 0" },
  yapikredi: { padding: "23px 50px 0 0" },
  buttonUnderLine: {
    width: "110px",
    height: "4px",
    position: "absolute",
    background: "#D50000",
    marginLeft: "21.7%",
    marginTop: "-0.4%",
    borderRadius: "4px",
  },
}));

export default function CompanyInfo() {
  const classes = useStyles();

  return (
    <>
      <Grid container xs={6.6}>
        <div className={classes.buttonUnderLine} />
        <Grid container item rowSpacing={4} className={classes.titleText}>
          <Grid item item xs={12}>
            <Typography variant="subtitle2">Şirket Unvanı</Typography>
          </Grid>
          <Grid item>
            <Typography>Ortaklar Ayakkabıcılık Lorem İpsum A.Ş.</Typography>
          </Grid>
        </Grid>
        <Grid container item rowSpacing={4} className={classes.titleText}>
          <Grid item xs={12}>
            <Typography variant="subtitle2">Vergi Dairesi</Typography>
          </Grid>
          <Grid item>
            <Typography>Beşiktaş Vergi Dairesi</Typography>
          </Grid>
        </Grid>
        <Grid container item rowSpacing={4} className={classes.titleText}>
          <Grid item item xs={12}>
            <Typography variant="subtitle2">Vergi Numarası</Typography>
          </Grid>
          <Grid item>
            <Typography>1234567890</Typography>
          </Grid>
        </Grid>
        <Grid container item rowSpacing={4} className={classes.titleText}>
          <Grid item>
            <Typography variant="subtitle2">Adres</Typography>
          </Grid>
          <Grid item>
            <Typography>
              Yakuplu Mah., Dereboyu Cad., Beysan Sanayi Sitesi, No:3,
              Beylikdüzü İstanbul/Turkiye
            </Typography>
          </Grid>
        </Grid>
        <Grid container item rowSpacing={4} className={classes.titleText}>
          <Grid item xs={12}>
            <Typography variant="subtitle2">Banka Hesap Bilgileri</Typography>
          </Grid>
          <Grid container item>
            <Grid item>
              <img src={garanti} className={classes.garanti} />
            </Grid>
            <Grid item>
              <Typography color="primary">Garanti Bankası</Typography>
              <Typography>
                Beylikdüzü Şubesi - TR11 2222 3333 4444 55
              </Typography>
            </Grid>
          </Grid>
          <Grid container item>
            <Grid item>
              <img src={yapikredi} className={classes.yapikredi} />
            </Grid>
            <Grid item>
              <Typography color="primary">YapıKredi Bankası</Typography>
              <Typography>
                Beylikdüzü Şubesi - TR11 2222 3333 4444 55
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

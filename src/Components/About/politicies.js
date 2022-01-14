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

export default function Politicies() {
  const classes = useStyles();

  return (
    <>
      <Grid container xs={6.6}>
      <div className={classes.buttonUnderLine} />
        <Grid container item rowSpacing={4} className={classes.titleText}>
          <Grid item>
            <Typography variant="subtitle2">Firma Değerimiz</Typography>
          </Grid>
          <Grid item>
            <Typography>
              Kalite ve AR-GE niteliklerini korumaya, ayakkabı sektöründe üretim
              deneyiminin vermiş olduğu bilgi birikimi ve tecrübeyi, günümüzdeki
              üretim gücünü geleceğe taşımaya, üretim sektöründe yenilikler ve
              ileriye yönelik üretim kapasitesini yükseltmeye devam edecektir.
            </Typography>
          </Grid>
        </Grid>
        <Grid container item rowSpacing={4} className={classes.titleText}>
          <Grid item>
            <Typography variant="subtitle2"> Vizyon</Typography>
          </Grid>
          <Grid item>
            <Typography>
              Firmamız Türkiye Dünya pazarında verimliliğini arttırmak amacıyla
              kendi alanında büyüyerek sürekliliğini ve kalite anlayışını
              geliştiren Türkiye’deki çocuk üretiminin öncülüğünü yapan, çocuk
              ayakkabı üretiminde kaliteli ürün ve gelişilen AR-GE alt yapısı
              olan kuruluş olmaktır.
            </Typography>
          </Grid>
        </Grid>
        <Grid container item rowSpacing={4} className={classes.titleText}>
          <Grid item>
            <Typography variant="subtitle2"> Misyon</Typography>
          </Grid>
          <Grid item>
            <Typography>
              Kalite ve üretim kalitemizi devamlı geliştirerek firma talep ve
              beklentilerini en iyi şekilde karşılayarak, geniş ürün AR-GE’si ve
              kaliteli üretim ile müşterilerimizle aramızda güven sadakatini
              sağlamak. Pazar içerisinde en çok tercih edilen çocuk ayakkabı
              üretim tesisi haline gelip hedefimizi, gücümüzü ileri nesillere
              taşıyarak firma karlılığımızı arttırmak.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

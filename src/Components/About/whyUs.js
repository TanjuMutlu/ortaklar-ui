import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  titleText: { paddingTop: "8%" },
  buttonUnderLine: {
    width: "89px",
    height: "4px",
    position: "absolute",
    background: "#D50000",
    marginLeft: "14%",
    marginTop: "-0.4%",
    borderRadius: "4px",
  },
}));

export default function WhyUs() {
  const classes = useStyles();

  return (
    <>
      <Grid container xs={6.6}>
        <div className={classes.buttonUnderLine} />
        <Grid container item rowSpacing={4} className={classes.titleText}>
          <Grid item>
            <Typography variant="subtitle2">AR-GE Çeşitliliği</Typography>
          </Grid>
          <Grid item>
            <Typography>
              Her sezon yaz ve kış olmak üzere 13 kişilik güçlü ar-ge ekibi ile
              müşterilerin talep ettiği ayakkabı modasını, yenilikleri yaparak
              markalara konforlu ve çocuklara yönelik ayakkabıları tasarlayarak
              müşteriye sunması.
            </Typography>
          </Grid>
        </Grid>
        <Grid container item rowSpacing={4} className={classes.titleText}>
          <Grid item xs={12}>
            <Typography variant="subtitle2">Branş</Typography>
          </Grid>
          <Grid item>
            <Typography>
              İşimiz çocuk ayakkabısı ve müşteri taleplerine karşılık verme.
            </Typography>
          </Grid>
        </Grid>
        <Grid container item rowSpacing={4} className={classes.titleText}>
          <Grid item>
            <Typography variant="subtitle2">Kalite</Typography>
          </Grid>
          <Grid item>
            <Typography>
              Firmamız uluslararası normlara uygun olarak her ürün testlerinden
              geçerek çocukların rahat ve ayak şekillerini alabilen malzemeler
              kullanılarak tasarlanmaktadır.
            </Typography>
          </Grid>
        </Grid>
        <Grid container item rowSpacing={4} className={classes.titleText}>
          <Grid item>
            <Typography variant="subtitle2">Müşteri Memnuniyeti</Typography>
          </Grid>
          <Grid item>
            <Typography>
              AR-GE’ den başlayıp, üretimden çıkan her çift ayakkabının müşteri
              tarafından geri dönüşlerinin olumlu yönde olması.
            </Typography>
          </Grid>
        </Grid>
        <Grid container item rowSpacing={4} className={classes.titleText}>
          <Grid item>
            <Typography variant="subtitle2">Çalışana Değer</Typography>
          </Grid>
          <Grid item>
            <Typography>
              Firmanın en önemli başarısı çalışma arkadaşlarına verdiği
              değerleri devamlı kılmasıdır.
            </Typography>
          </Grid>
        </Grid>
        <Grid container item rowSpacing={4} className={classes.titleText}>
          <Grid item>
            <Typography variant="subtitle2">Ülke Ekonomisine Katkı</Typography>
          </Grid>
          <Grid item>
            <Typography>
              Tamamı Türkiye’ de üretilen ürünlerin etkileşimde bulunduğu
              sektöre ve yaşattığı iş imkânı ile ülke ekonomisine katkı sağlar.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

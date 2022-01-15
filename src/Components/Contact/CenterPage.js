import React, { useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import {
  Grid,
  Typography,
  Button,
  TextField,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  main: {},
  info: { background: "#F4F5F7", height: "760px" },
  contactForm: {},
  infoLink: { color: "#D50000" },
  submitButton: {
    color: "#fff",
    width: "100%",
    height: "48px",
    marginTop: "20px",
  },
  checkboxLabel: { fontSize: "16px" },
  redUnderLine: {
    width: "60px",
    height: "4px",
    position: "absolute",
    background: "#D50000",
    marginLeft: "22.3%",
    marginTop: "18.8%",
    borderRadius: "4px",
  },
}));

export default function Contact() {
  const classes = useStyles();
  const [mail, setMail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mail && subject && message) {
      console.log(mail, subject, message);
    }
  };

  return (
    <>
      <div className={classes.redUnderLine} />
      <Grid container className={classes.main}>
        <Grid
          container
          item
          className={classes.info}
          xs={6}
          justifyContent="center"
          alignItems="center"
        >
          <Grid container item xs={8} rowSpacing={3}>
            <Grid item>
              <Typography variant="subtitle2" className={classes.infoTitle}>
                Adres
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.infoText}>
                Yakuplu Mah., Dereboyu Cad., Beysan Sanayi Sitesi, No:3,
                Beylikdüzü İstanbul/Turkiye
              </Typography>
            </Grid>
            <Grid item>
              <a href="/" className={classes.infoLink}>
                Yol Tarifi Al
              </a>
            </Grid>
          </Grid>
          <Grid container item xs={8} rowSpacing={3}>
            <Grid item xs={12}>
              <Typography variant="subtitle2" className={classes.infoTitle}>
                Telefon
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.infoText}>
                (0212) 875 38 21
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <a href="/" className={classes.infoLink}>
                Hemen Ara
              </a>
            </Grid>
          </Grid>
          <Grid container item xs={8} rowSpacing={3}>
            <Grid item xs={12}>
              <Typography variant="subtitle2" className={classes.infoTitle}>
                Email
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.infoText}>
                info@ortaklarshoe.com
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <a href="/" className={classes.infoLink}>
                Mail At
              </a>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          item
          className={classes.contactForm}
          xs={6}
          justifyContent="center"
          alignItems="center"
        >
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Grid container item justifyContent="center" rowSpacing={3}>
              <Grid item xs={10}>
                <Typography variant="subtitle2">Bize Ulaşın</Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography color="primary">Mail</Typography>
                <TextField
                  onChange={(e) => setMail(e.target.value)}
                  fullWidth
                  id="outlined-basic"
                  label="Güncel mail adresiniz nedir?"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={10}>
                <Typography color="primary">Konu</Typography>
                <TextField
                  onChange={(e) => setSubject(e.target.value)}
                  fullWidth
                  id="outlined-basic"
                  label="Ne hakkında bilgi almak istiyorsunuz?"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={10}>
                <Typography color="primary">Mesaj</Typography>
                <TextField
                  onChange={(e) => setMessage(e.target.value)}
                  multiline
                  rows={4}
                  fullWidth
                  id="outlined-basic"
                  label="Mesajınızı yazınız"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={10}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox color="secondary" disableRipple={1} />}
                    label={
                      <Typography
                        color="primary"
                        className={classes.checkboxLabel}
                      >
                        KVKK Aydınlatma Metni okudum, kabul ediyorum.
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox color="secondary" disableRipple={1} />}
                    label={
                      <Typography
                        color="primary"
                        className={classes.checkboxLabel}
                      >
                        Ticari Elektronik İleti Bilgilendirme ve Onay Metni
                        okudum, tarafıma elektronik ileti gönderilmesini
                        onaylıyorum.
                      </Typography>
                    }
                  />
                </FormGroup>
                <Button
                  type="submit"
                  className={classes.submitButton}
                  style={{ background: "#D50000" }}
                >
                  Mesajı Gönder
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
}

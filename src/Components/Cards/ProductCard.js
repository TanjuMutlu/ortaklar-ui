import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  title: {
    position: "relative",
    maxWidth: "80%",
    height: "21px",
    marginLeft: "15px",
    marginTop: "10px",
    lineHeight: "21px",
    fontSize: "18px",
  },
  body: {
    position: "relative",
    maxWidth: "80%",
    height: "17px",
    marginLeft: "15px",
    marginTop: "5px",
    lineHeight: "17px",
    fontSize: "14px",
  },
  button: {
    position: "relative",
    textTransform: "none",
    height: "30px",
    width: "100%",
    marginTop: "0px",
    marginLeft: "5px",
  },
  inspectText: {
    textDecoration: "underline",
    lineHeight: "17px",
    fontSize: "16px",
  },
  img: {
    width: "270px",
    height: "270px",
    filter: "grayscale(100%)",
    "&:hover": {
      filter: "grayscale(0%)",
    },
  },
}));

export default function HomePageCard({ title, body, img, cardLink }) {
  const classes = useStyles();
  return (
    <Card sx={{ width: "270px", height: "365px" }} elevation={1}>
      <Grid container>
        <Grid item>
          <CardContent style={{ padding: 0 }}>
            <Grid container className={classes.container}>
              <Grid container item xs={12}>
                <img src={img} className={classes.img} />
              </Grid>
            </Grid>
          </CardContent>
        </Grid>

        <Grid item xs={12}>
          <CardActions>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="subtitle1" className={classes.title}>
                  {title}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="body1" className={classes.body}>
                  {body}
                </Typography>
              </Grid>
              <Grid container item xs={2}>
                <Button
                  disableRipple={true}
                  href={cardLink}
                  className={classes.button}
                  style={{ background: 0 }}
                >
                  <Typography className={classes.inspectText} color="secondary">
                    Incele
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}

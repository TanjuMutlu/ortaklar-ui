import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import {
  Grid,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  TextField,
} from "@mui/material";
import news from "./img/news.svg";

const useStyles = makeStyles((theme) => ({
  main: {
    position: "relative",
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
  buttonDialog: {
    color: "#fff",
    width: "100%",
    height: "48px",
    margin: "auto",
  },
  img: { position: "absolute", bottom: "00px", right: "100px" },
  dialogFormText: { fontSize: "16px", color: "#000" },
}));

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;
  const classes = useStyles();

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth={1}>
      <DialogTitle>
        <Typography variant="subtitle1">Teklif Formu</Typography>
      </DialogTitle>
      <List>
        <ListItem>
          <Grid container direction="column">
            <Grid container item direction="row">
              <Grid item>
                <Typography className={classes.dialogFormText}>
                  Ad Soyad
                </Typography>
              </Grid>
              <Grid item>
                <Typography color="secondary"> *</Typography>
              </Grid>
            </Grid>
            <TextField required />
          </Grid>
        </ListItem>
        <ListItem>
          <Grid container direction="column">
            <Grid container item direction="row">
              <Grid item>
                <Typography className={classes.dialogFormText}>
                  Firma Bilgileri
                </Typography>
              </Grid>
              <Grid item>
                <Typography color="secondary"> *</Typography>
              </Grid>
            </Grid>
            <TextField required />
          </Grid>
        </ListItem>
        <ListItem>
          <Grid container direction="column">
            <Grid container item direction="row">
              <Grid item>
                <Typography className={classes.dialogFormText}>
                  Telefon Numarasi
                </Typography>
              </Grid>
              <Grid item>
                <Typography color="secondary"> *</Typography>
              </Grid>
            </Grid>
            <TextField label="5xx xxx xxxx" required />
          </Grid>
        </ListItem>
        <ListItem>
          <Grid container direction="column">
            <Grid container item direction="row">
              <Grid item>
                <Typography className={classes.dialogFormText}>
                  Mesaj
                </Typography>
              </Grid>
              
            </Grid>
            <TextField multiline={1} rows={4} required />
          </Grid>
        </ListItem>

        <ListItem onClick={() => handleListItemClick("addAccount")}>
          <Button
            className={classes.buttonDialog}
            disableRipple={true}
            style={{ backgroundColor: "#D50000" }}
            onClick={() => handleListItemClick("addAccount")}
          >
            Gonder
          </Button>
        </ListItem>
      </List>
    </Dialog>
  );
}

export default function OfferDownload() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

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
            onClick={handleClickOpen}
          >
            Teklif Al
          </Button>
        </Grid>
      </Grid>

      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />

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

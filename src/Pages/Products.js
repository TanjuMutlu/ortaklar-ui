import * as React from "react";
import { Grid, Typography, Button, Container } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import makeStyles from "@mui/styles/makeStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons/faAngleDown";
import Line from "../Components/Products/img/Line.svg";
import bigCardImg from "../Components/Products/img/deneme.png";
import dotsArrow from "../Components/Products/img/dotsArrow.svg";
import pinkRectangle from "../Components/Products/img/pinkRectangle.svg";
import Card from "../Components/Cards/ProductCard";
import BigCard from "../Components/Cards/ProductCardBig";

const useStyles = makeStyles((theme) => ({
  main: {
    background: "linear-gradient(360deg, #FFF 0%, #F4F5F7 100%)",
    overflow: "hidden",
  },
  dropdownsGrid: {
    position: "absolute",
    padding: "20px 0 20px 155px",
    overflow: "hidden",
  },
  dropdownButton: {},
  dropdownText: { fontSize: "18px", textTransform: "none" },
  Line: { position: "absolute", marginTop: "5.5%", width: "100%" },
  dotsArrow: { position: "absolute", marginTop: "9%", marginLeft: "5px" },
  cardContainer: { position: "relative", marginLeft: "11%", marginTop: "-47%" },
  icon: { marginLeft: "5px" },
}));

const Products = ({ data }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Grid container className={classes.main}>
        <Grid
          container
          item
          xs={11}
          justifyContent="flex-start"
          columnSpacing={2}
          className={classes.dropdownsGrid}
        >
          {/* MARKA DROPDOWN */}
          <Grid item className={classes.dropdownButton}>
            <Button
              id="basic-button"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              disableRipple={true}
              style={{
                backgroundColor: "transparent",
              }}
            >
              <Typography className={classes.dropdownText} color="primary">
                Marka
              </Typography>
              <FontAwesomeIcon
                className={classes.icon}
                icon={faAngleDown}
                size="1x"
              />
            </Button>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                onClick={handleClose}
                style={{ backgroundColor: "transparent" }}
                disableRipple={true}
              >
                <Typography className={classes.dropdownText}>Marka1</Typography>
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                style={{ backgroundColor: "transparent" }}
                disableRipple={true}
              >
                <Typography className={classes.dropdownText}>Marka2</Typography>
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                style={{ backgroundColor: "transparent" }}
                disableRipple={true}
              >
                <Typography className={classes.dropdownText}>Marka3</Typography>
              </MenuItem>
            </Menu>
          </Grid>
          {/* CINSIYET DROPDOWN */}
          <Grid item className={classes.dropdownButton}>
            <Button
              id="basic-button"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              disableRipple={true}
              style={{
                backgroundColor: "transparent",
              }}
            >
              <Typography className={classes.dropdownText} color="primary">
                Cinsiyet
              </Typography>
              <FontAwesomeIcon
                className={classes.icon}
                icon={faAngleDown}
                size="1x"
              />
            </Button>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                onClick={handleClose}
                style={{ backgroundColor: "transparent" }}
                disableRipple={true}
              >
                <Typography className={classes.dropdownText}>Kadin</Typography>
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                style={{ backgroundColor: "transparent" }}
                disableRipple={true}
              >
                <Typography className={classes.dropdownText}>Erkek</Typography>
              </MenuItem>
            </Menu>
          </Grid>
          {/* URUNLERI SIRALA DROPDOWN */}
          <Grid
            container
            item
            className={classes.dropdownButton}
            xs={9.5}
            direction="row-reverse"
          >
            <Button
              id="basic-button"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              disableRipple={true}
              style={{
                backgroundColor: "transparent",
              }}
            >
              <Typography className={classes.dropdownText} color="primary">
                Urunleri Sirala
              </Typography>
              <FontAwesomeIcon
                className={classes.icon}
                icon={faAngleDown}
                size="1x"
              />
            </Button>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                onClick={handleClose}
                style={{ backgroundColor: "transparent" }}
                disableRipple={true}
              >
                <Typography className={classes.dropdownText}>Urun1</Typography>
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                style={{ backgroundColor: "transparent" }}
                disableRipple={true}
              >
                <Typography className={classes.dropdownText}>URUN2</Typography>
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                style={{ backgroundColor: "transparent" }}
                disableRipple={true}
              >
                <Typography className={classes.dropdownText}>URUN3</Typography>
              </MenuItem>
            </Menu>
          </Grid>
        </Grid>

        <img src={Line} className={classes.Line} />
        <img src={pinkRectangle} />
        <img src={dotsArrow} className={classes.dotsArrow} />

        <Grid
          container
          direction="row"
          className={classes.cardContainer}
          xs={10}
          spacing={1}
        >
          <Grid item xs={5.63}>
            <BigCard
              img={bigCardImg}
              title={"deneme"}
              body={"deneme deneme deneme"}
            />
          </Grid>
          <Grid
            container
            item
            direction="row"
            xs={6}
            spacing={1}
            rowSpacing={2}
          >
            <Grid item>
              <Card
                img={bigCardImg}
                title={"deneme"}
                body={"deneme deneme deneme"}
              />
            </Grid>
            <Grid item>
              <Card
                img={bigCardImg}
                title={"deneme"}
                body={"deneme deneme deneme"}
              />
            </Grid>
            <Grid item>
              <Card
                img={bigCardImg}
                title={"deneme"}
                body={"deneme deneme deneme"}
              />
            </Grid>
            <Grid item>
              <Card
                img={bigCardImg}
                title={"deneme"}
                body={"deneme deneme deneme"}
              />
            </Grid>
          </Grid>
          {data.map((product) => (
            <Grid item>
              <Card
                img={product.img}
                title={product.name}
                body={product.description}
                cardLink={"product/" + product.id}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Products;

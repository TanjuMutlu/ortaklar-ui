import { withRouter, useParams, Link } from "react-router-dom";
import makeStyles from "@mui/styles/makeStyles";
import line from "../Components/Footer/img/Line.svg";
import { Grid, Typography, Button } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  main: { background: "linear-gradient(360deg, #FFF 0%, #F4F5F7 100%)" },
  productNavigationBar: { paddingTop: "25px" },
  detailsTextGrid: { padding: "40px 0 0 50px" },
  productImg: { height: "500px", width: "375px" },
  productsLinkButton: { textTransform: "none", fontSize: "18px" },
  forwardArrowIcon: { fontSize: "15px" },
}));

function ProductDetail({ data }) {
  const { id } = useParams();
  const classes = useStyles();

  return (
    <>
      {data
        .filter((product) => product.id == id)
        .map((product, i) => (
          <div key={i}>
            <Grid container className={classes.main} justifyContent="center">
              <Grid
                container
                item
                columnSpacing={1}
                className={classes.productNavigationBar}
              >
                <Grid container item xs={2} justifyContent="flex-end">
                  <Link to="/products">
                    <Typography className={classes.productsLinkButton}>
                      Urunler
                    </Typography>
                  </Link>
                </Grid>
                <Grid item>
                  <ArrowForwardIos
                    className={classes.forwardArrowIcon}
                    color="primary"
                  />
                </Grid>
                <Grid item>
                  <Typography
                    color="primary"
                    className={classes.productsLinkButton}
                  >
                    {product.name}
                  </Typography>
                </Grid>

                <Grid item>
                  <img src={line} />
                </Grid>
              </Grid>
              <Grid container item xs={9}>
                <Grid item>
                  <img className={classes.productImg} src={product.img} />
                </Grid>
                <Grid
                  container
                  item
                  className={classes.detailsTextGrid}
                  direction="column"
                  xs={7.5}
                  rowSpacing={2}
                >
                  <Grid item>
                    <Typography> {product.id} </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h4"> {product.name} </Typography>
                  </Grid>
                  <Grid container item columnSpacing={2}>
                    <Grid item>
                      <Button variant="outlined" disabled>
                        kid
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" disabled>
                        brand name
                      </Button>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography sx={{ fontSize: "16px" }}>
                        32 - 42 numara aralığında üretilmektedir.
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="body">
                      {product.description}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        ))}
    </>
  );
}

export default withRouter(ProductDetail);

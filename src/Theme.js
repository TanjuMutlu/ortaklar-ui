import { createTheme } from "@mui/material/styles";
import { blue, red } from "@mui/material/colors";

let theme = createTheme({
  palette: {
    primary: { main: "#000000", contrastText: "#fff" },
    secondary: { main: "#D50000", contrastText: "#fff" },
  },
  typography: {
    h6: {
      fontSize: "16px",
      lineHeight: "19px",
      fontFamily: "Rubik,sans-serif",
      fontStyle: "normal",
      fontWeight: "normal",
      "&:hover": {
        color: "#D50000",
      },
    },
    h5: {
      fontSize: "26px",
      lineHeight: "20px",
      fontFamily: "Rubik,sans-serif",
      fontStyle: "normal",
      fontWeight: "bold",
      "&:hover": {
        color: "#D50000",
      },
    },
    h4: {
      fontSize: "36px",
      lineHeight: "43px",
      fontFamily: "Rubik,sans-serif",
      fontStyle: "normal",
      fontWeight: "bold",
      color: "#000",
    },
    subtitle1: {
      fontSize: "56px",
      lineHeight: "72px",
      fontFamily: "Rubik,sans-serif",
      fontStyle: "normal",
      fontWeight: "600",
      color: "#000000",
    },
    subtitle2: {
      fontSize: "24px",
      lineHeight: "28px",
      fontFamily: "Rubik,sans-serif",
      fontStyle: "normal",
      fontWeight: "bold",
      color: "#000000",
    },
    body1: {
      fontSize: "22px",
      lineHeight: "32px",
      fontFamily: "Rubik,sans-serif",
      fontStyle: "normal",
      fontWeight: "normal",
      color: "#6B7588",
    },
    body2: {
      fontSize: "22px",
      lineHeight: "32px",
      fontFamily: "Rubik,sans-serif",
      fontStyle: "normal",
      fontWeight: "normal",
      textAlign: "center",
      color: "#000",
    },
  },
});

export default theme;

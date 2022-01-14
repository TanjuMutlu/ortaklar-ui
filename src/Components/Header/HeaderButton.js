import * as React from "react";
import { Button, Typography } from "@mui/material";

export default function StyledHeaderButtons() {
  return (
    <>
      <Button
        href="/about"
        disableRipple={true}
        style={{
          backgroundColor: "transparent",
          position: "absolute",
          left: "45%",
          top: "70px",
          textTransform: "none",
        }}
      >
        {" "}
        <Typography variant="h6"> Hakkımızda </Typography>{" "}
      </Button>

      <Button
        href="/products"
        disableRipple={true}
        style={{
          backgroundColor: "transparent",
          position: "absolute",
          left: "56%",
          top: "70px",
          textTransform: "none",
        }}
      >
        <Typography variant="h6">Ürünler</Typography>
      </Button>

      <Button
        href="/brands"
        disableRipple={true}
        style={{
          backgroundColor: "transparent",
          position: "absolute",
          left: "65%",
          top: "70px",
          textTransform: "none",
        }}
      >
        <Typography variant="h6">Markalar</Typography>
      </Button>

      <Button
        href="/referances"
        disableRipple={true}
        style={{
          backgroundColor: "transparent",
          position: "absolute",
          left: "75%",
          top: "70px",
          textTransform: "none",
        }}
      >
        <Typography variant="h6">Referanslar</Typography>
      </Button>

      <Button
        href="/contact"
        disableRipple={true}
        style={{
          backgroundColor: "transparent",
          position: "absolute",
          left: "85%",
          top: "70px",
          textTransform: "none",
        }}
      >
        <Typography variant="h6">İletişim</Typography>
      </Button>
    </>
  );
}

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function BigSliderItem({ title, body, img }) {
  return (
    <Card sx={{ minWidth: 500 }} elevation={0}>
      <CardContent>
        <Typography
          variant="subtitle1"
          style={{
            position: "absolute",
            width: "500px",
            height: "145px",
            marginLeft: "0.4%",
            marginTop: "100px",
          }}
        >
          {title}
        </Typography>

        <Paper
          elevation={0}
          className="paper"
          style={{
            position: "absolute",
            width: "335px",
            height: "10px",
            marginLeft: "0.4%",
            marginTop: "250px",
            background: "#D50000",
            borderRadius: 0,
          }}
        />

        <CardMedia
          style={{
            height: "600px",
            width: "600px",
            marginLeft: "50%",
            marginTop: "1.5%",
          }}
          component="img"
          image={img}
        />

        <Typography
          variant="body1"
          style={{
            position: "absolute",
            width: "480px",
            height: "96px",
            marginLeft: "0.4%",
            marginTop: "-340px",
          }}
        >
          {body}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

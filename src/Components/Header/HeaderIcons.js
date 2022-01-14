import * as React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import IconButton from "@mui/material/IconButton";
import { ReactComponent as ortaklar } from "./img/ortaklar.svg";
import { ReactComponent as headerlogo } from "./img/headerlogo.svg";

export default function StyledHeaderIcons() {
  return (
    <>
      <IconButton
        href="/"
        disableRipple={true}
        style={{ backgroundColor: "transparent" }}
      >
        <SvgIcon
          component={headerlogo}
          viewBox="0 0 140 140"
          style={{
            height: "100px",
            width: "100px",
            marginTop: "52px",
            marginLeft: "25px",
          }}
        />
      </IconButton>

      <IconButton
        href="/"
        disableRipple={true}
        style={{ backgroundColor: "transparent" }}
      >
        <SvgIcon
          component={ortaklar}
          viewBox="0 0 190 28"
          style={{
            height: "50px",
            width: "170px",
            marginTop: "15px",
            marginLeft: "-20px",
          }}
        />
      </IconButton>
    </>
  );
}

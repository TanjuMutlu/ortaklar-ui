import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import theme from "../../Theme";
import StyledHeaderButtons from "./HeaderButton";
import StyledHeaderIcons from "./HeaderIcons";
import HeaderDropdown from "./HeaderDropdown";

export default function Header() {
  return (
    <>
      <AppBar position="static" color="inherit" elevation={0}>
        <Toolbar>
          <StyledHeaderIcons />

          <StyledHeaderButtons />

          <HeaderDropdown />
        </Toolbar>
      </AppBar>
    </>
  );
}

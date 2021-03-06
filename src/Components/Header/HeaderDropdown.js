import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Typography, Icon } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons/faAngleDown";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  menuItem: { height: "25px", width: "55px", marginLeft: "-10px" },
  icon: { marginLeft: "10px" },
}));

export default function HeaderDropdown() {
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
    <div>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        disableRipple={true}
        style={{
          left: "92%",
          top: "70px",
          position: "absolute",
          backgroundColor: "transparent",
        }}
      >
        <Typography variant="h5">TR</Typography>
        <FontAwesomeIcon
          icon={faAngleDown}
          size="1x"
          className={classes.icon}
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
          className={classes.menuItem}
        >
          <Typography variant="h5" className={classes.menuItemText}>
            EN
          </Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}

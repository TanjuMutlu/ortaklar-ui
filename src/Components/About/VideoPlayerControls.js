import React, { forwardRef } from "react";
import makeStyles from '@mui/styles/makeStyles';
import withStyles from '@mui/styles/withStyles';
import { Grid, Typography, Button, Container } from "@mui/material";

import IconButton from '@mui/material/IconButton';
import Slider from '@mui/material/Slider';
import Tooltip from '@mui/material/Tooltip';
import Popover from '@mui/material/Popover';
import {
  FastRewind, FastForward,
  PlayArrow, Pause, Fullscreen, VolumeUp, VolumeOff
} from '@mui/icons-material';


const useStyles = makeStyles({
  controlsWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    zIndex: 1,
  },
  controlIcons: {
    color: "#777",
    fontSize: 50,
    transform: "scale(0.9)",
    "&:hover": {
      color: "#fff",
      transform: "scale(1)",
    },
  },

  bottomIcons: {
    color: "#999",
    "&:hover": {
      color: "#fff",
    },
  },
  volumeSlider: {
    width: 100,
  },
});

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

const PrettoSlider = withStyles({
  root: {
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export default forwardRef(({
  onPlayPause,
  playing,
  onForward,
  onRewind,
  onMute,
  muted,
  onVolumeChange,
  onVolumeSeekUp,
  volume,
  onPlayBackRateChange,
  playbackRate,
  onToggleFullScreen,
  played,
  onSeek,
  onSeekMouseDown,
  onSeekMouseUp,
  ellapsedTime,
  totalDuration

}, ref) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "playbackrate-popover" : undefined;
  return (
    <div className={classes.controlsWrapper} ref={ref}>
      {/* Top controls */}
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="space-between"
        style={{ padding: 16 }}
      >
        <Grid item>
          <Typography variant="h5" style={{ color: "#fff" }}>
            Video Title
          </Typography>
        </Grid>

      </Grid>

      {/* middle controls */}

      <Grid container direaction="row" alignItems="center" justifyContent="center">
        <IconButton onClick={onRewind} className={classes.controlIcons} aria-label="reqind">
          <FastRewind fontSize="inherit" />
        </IconButton>

        <IconButton onClick={onPlayPause} className={classes.controlIcons} aria-label="reqind">
          {playing ? (<Pause fontSize="inherit" />) :
            (<PlayArrow fontSize="inherit" />)}
        </IconButton>

        <IconButton onClick={onForward} className={classes.controlIcons} aria-label="reqind">
          <FastForward fontSize="inherit" />
        </IconButton>
      </Grid>

      {/* bottom controls */}
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        style={{ padding: 16 }}
      >
        <Grid item xs={12}>
          <PrettoSlider
            min={0}
            max={100}
            value={played * 100}
            ValueLabelComponent={
              (props) => (<ValueLabelComponent {...props} value={ellapsedTime} />)}
            onChange={onSeek}
            onMouseDown={onSeekMouseDown}
            onChangeCommitted={onSeekMouseUp}
          />
        </Grid>

        <Grid item>
          <Grid container alignItems="center" direction="row">
            <IconButton onClick={onPlayPause} className={classes.bottomIcons}>
              {playing ? (<Pause fontSize="inherit" />) :
                (<PlayArrow fontSize="inherit" />)}
            </IconButton>

            <IconButton onClick={onMute} className={classes.bottomIcons}>
              {muted ? (<VolumeOff fontSize="large" />) :
                (<VolumeUp fontSize="large" />)}
            </IconButton>

            <Slider
              min={0}
              max={100}
              value={muted ? 0 : volume * 100}
              className={classes.volumeSlider}
              onChange={onVolumeChange}
              onChangeCommited={onVolumeSeekUp}
            />

            <Button variant="text" style={{ color: "#fff", marginLeft: 16 }}>
              <Typography>
                {ellapsedTime} / {totalDuration}
              </Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            onClick={handlePopover}
            variant="text"
            className={classes.bottomIcons}
          >
            <Typography>{playbackRate}X</Typography>
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
          >
            <Grid container direction="column-reverse">
              {[0.5, 1, 1.5, 2].map((rate) => (
                <Button onClick={() => onPlayBackRateChange(rate)} variant="text">
                  <Typography color={rate === playbackRate ? "secondary" : 'primary'}>{rate}</Typography>
                </Button>
              ))}
            </Grid>
          </Popover>
          <IconButton onClick={onToggleFullScreen} className={classes.bottomIcons}>
            <Fullscreen fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
});
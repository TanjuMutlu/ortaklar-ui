import React, { useState, useRef } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography, Container } from "@mui/material";
import ReactPlayer from "react-player";
import video from "./img/slot.mp4";
import redLine from "./img/redLine.svg";
import imgRun from "./img/imgRun.svg";
import imgClimb from "./img/imgClimb.svg";
import imgStreching from "./img/imgStreching.svg";
import imgSwim from "./img/imgSwim.svg";
import imgVoleyball from "./img/imgVoleyball.svg";
import redCircle from "./img/circle.svg";

import VideoPlayerControls from "./VideoPlayerControls";
// import screenfull from 'screenfull';

const useStyles = makeStyles((theme) => ({
  main: {
    background: "linear-gradient(360deg, #FFF 0%, #F4F5F7 100%)",
    mixBlendMode: "normal",
    maxWidth: "1600px",
    margin: "auto",
  },
  about: {
    marginTop: "80px",
  },
  playerWrapper: {
    width: "100%",
    position: "relative",
  },
  playerContainer: {
    marginTop: "50px",
  },
  text: { width: "50%", marginTop: "50px" },
  redLine: { position: "relative", marginLeft: "52%" },
  picturesAndTexts: { background: "#F4F5F7", transform: 0, marginTop: "50px" },
  circleAndRing1: {
    position: "absolute",
    marginLeft: "3.05%",
    marginTop: "15%",
  },
  circleAndRing2: {
    position: "absolute",
    marginLeft: "3.05%",
    marginTop: "42%",
  },
  circleAndRing3: {
    position: "absolute",
    marginLeft: "3.05%",
    marginTop: "69%",
  },
  circleAndRing4: {
    position: "absolute",
    marginLeft: "3.05%",
    marginTop: "96%",
  },
  circleAndRing5: {
    position: "absolute",
    marginLeft: "3.05%",
    marginTop: "123%",
  },
  imgLeft: { padding: " 0px 0 0 0", height: "300px" },
  textLeft: { padding: " 0px 0 0 0", height: "300px" },
  imgRight: { padding: " 0px 0 0 0", height: "300px" },
  textRight: { padding: " 0px 0 0 0", height: "300px" },
  line: { marginTop: "20px" },
  buttonUnderLine: {
    width: "85px",
    height: "4px",
    position: "absolute",
    background: "#D50000",
    marginLeft: "4%",
    marginTop: "-6.5%",
    borderRadius:'4px'
  },
}));

const format = (seconds) => {
  if (isNaN(seconds)) {
    return "00:00";
  }

  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2, "0");

  if (hh) {
    return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
  }

  return `${mm}:${ss}`;
};

let count = 0;

export default function HistoryPage() {
  const classes = useStyles();
  const [state, setState] = useState({
    playing: true,
    muted: false,
    volume: 0.5,
    playbackRate: 1.0,
    played: 0,
    seeking: false,
  });

  const { playing, muted, volume, playbackRate, played, seeking } = state;

  const handlePlayPause = () => {
    setState({ ...state, playing: !state.playing });
  };

  const playerRef = useRef(null);
  const playerContainerRef = useRef(null);
  const controlsRef = useRef(null);

  const handleRewind = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
  };
  const handleForward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
  };
  const handleMute = () => {
    setState({ ...state, muted: !state.muted });
  };
  const handleVolumeChange = (e, newValue) => {
    setState({
      ...state,
      volume: parseFloat(newValue / 100),
      muted: newValue === 0 ? true : false,
    });
  };
  const handleVolumeSeekUp = (e, newValue) => {
    setState({
      ...state,
      volume: parseFloat(newValue / 100),
      muted: newValue === 0 ? true : false,
    });
  };
  const handlePlayBackRateChange = (rate) => {
    setState({ ...state, playbackRate: rate });
  };
  /*const handleToggleFullScreen = () => {
    screenfull.toggle(playerContainerRef.current);
  };*/
  const handleProgress = (changeState) => {
    if (count > 3) {
      controlsRef.current.style.visibility = "hidden";
      count = 0;
    }

    if (controlsRef.current.style.visibility === "visible") {
      count += 1;
    }

    if (!state.seeking) {
      setState({ ...state, ...changeState });
    }
  };

  const handleSeekChange = (e, newValue) => {
    setState({ ...state, played: parseFloat(newValue / 100) });
  };
  const handleSeekMouseDown = (e) => {
    setState({ ...state, seeking: true });
  };
  const handleSeekMouseUp = (e, newValue) => {
    setState({ ...state, seeking: false });
    playerRef.current.seekTo(newValue / 100);
  };

  const handleMouseMove = () => {
    controlsRef.current.style.visibility = "visible";
    count = 0;
  };

  const currentTime = playerRef.current
    ? playerRef.current.getCurrentTime()
    : "00:00";
  const duration = playerRef.current
    ? playerRef.current.getDuration()
    : "00:00";
  const ellapsedTime = format(currentTime);
  const totalDuration = format(duration);
  return (
    <>
      <Container className={classes.playerContainer} maxWidth="md">
        <div
          ref={playerContainerRef}
          className={classes.playerWrapper}
          onMouseMove={handleMouseMove}
        >
          <div className={classes.buttonUnderLine} />
          <ReactPlayer
            ref={playerRef}
            width={"100%"}
            height={"100%"}
            url={video}
            muted={muted}
            playing={playing}
            volume={volume}
            playbackRate={playbackRate}
            onProgress={handleProgress}
          />

          <VideoPlayerControls
            ref={controlsRef}
            onPlayPause={handlePlayPause}
            playing={playing}
            muted={muted}
            volume={volume}
            onRewind={handleRewind}
            onForward={handleForward}
            onMute={handleMute}
            onVolumeChange={handleVolumeChange}
            onVolumeSeekUp={handleVolumeSeekUp}
            playbackRate={playbackRate}
            onPlayBackRateChange={handlePlayBackRateChange}
            //onToggleFullScreen={handleToggleFullScreen}
            played={played}
            onSeek={handleSeekChange}
            onSeekMouseDown={handleSeekMouseDown}
            onSeekMouseUp={handleSeekMouseUp}
            ellapsedTime={ellapsedTime}
            totalDuration={totalDuration}
          />
        </div>
      </Container>

      <Grid
        container
        item
        direction={"column"}
        className={classes.text}
        justifyContent="flex-start"
        alignItems="flex-start"
        rowSpacing={4}
      >
        <Grid item>
          <Typography variant="subtitle2">Ortaklar Ayakkab??c??l??k</Typography>
        </Grid>

        <Grid item>
          <Typography>
            2014 y??l??ndan itibaren ??ocuk ayakkab??s?? ??retim kategorisinde
            T??rkiye???nin en kapsaml?? AR-GE???si ve ??retimine sahiptir.
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
            Her sezon g????l?? AR-GE departman?? ile bir??ok sekt??r??nde lider
            markalara ??ocuk ayakkab??s?? tasarlayarak modaya y??n vermektedir.
          </Typography>
        </Grid>

        <Grid item>
          <Typography>
            Ortaklar Ayakkab??c??l??k, y??llar??n vermi?? oldu??u deneyimleri AR-GE
            g??c?? ve ??retim g??c??n?? birle??tirerek ??retim kalitesi ile birlikte
            T??rkiye ve Avrupa???da ??ocuk ayakkab?? ??retiminde lider olmak ve
            ihracat kapasitesini de her ge??en y??l artt??rarak yeniliklere devam
            edecektir.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        item
        direction={"row"}
        className={classes.picturesAndTexts}
      >
        <Grid
          container
          item
          direction={"column"}
          xs={4.5}
          style={{ marginLeft: "3%", paddingTop: "100px" }}
          spacing={10}
        >
          <Grid item>
            <Typography className={classes.textLeft}>
              1975 y??l??ndan itibarenba??layan ayakkab?? ??retim ve pazarlama
              sekt??r??nde k??kl?? bir ge??mi??e ve deneyime sahip olarak, 2014
              y??l??nda 2.ku??ak taraf??ndan sekt??re temelleri at??lan ??ocukayakkab??
              ??retim tesisidir.
            </Typography>
          </Grid>
          <Grid item>
            <img src={imgClimb} className={classes.imgLeft} />
          </Grid>
          <Grid item>
            <Typography className={classes.textLeft}>
              Buna ba??l?? olarak bilimsel boyutu olu??turan AR-GE ??al????malar??
              teknik analizler ve ??retim kurallar?? uluslararas?? normlara uygun
              olarak ger??ekle??tirilmekte ba????ms??z laboratuvarlar ve ba????ms??z
              denetim(BSCI) kurumlar?? taraf??ndan denetlenmektedir.
            </Typography>
          </Grid>
          <Grid item>
            <img src={imgStreching} className={classes.imgLeft} />
          </Grid>
          <Grid item>
            <Typography className={classes.textLeft}>
              Y??lda 1 milyon ??ift ??retim ger??ekle??tiren ve her sezon yeni g??ncel
              moda tasar??mlar??n?? firmalara sunmaktad??r. Bug??n Ortaklar
              Ayakkab??c??l??k T??rkiye???de sekt??r??nde lider markalar olmak ??zere
              Avrupa???da 14 ??lkeye ihracat yapan ??retim tesisi konumuna
              gelmi??tir. Firman??n hedefi, ayakkab?? ??retiminde T??rkiye ve
              Avrupa???da lider olmak ve ihracat kapasitesini her ge??en y??l
              artt??rmaktad??r.
            </Typography>
          </Grid>
        </Grid>
        <Grid container item xs={1}>
          <img src={redLine} className={classes.redLine} />

          <img src={redCircle} className={classes.circleAndRing1} />
          <img src={redCircle} className={classes.circleAndRing2} />
          <img src={redCircle} className={classes.circleAndRing3} />
          <img src={redCircle} className={classes.circleAndRing4} />
          <img src={redCircle} className={classes.circleAndRing5} />
        </Grid>
        <Grid
          container
          item
          direction={"column"}
          xs={4.5}
          spacing={10}
          style={{ paddingTop: "100px" }}
        >
          <Grid item>
            <img src={imgRun} className={classes.imgRight} />
          </Grid>
          <Grid item>
            <Typography className={classes.textRight}>
              Ortaklar Ayakkab??c??l??k, sekt??rde g????l?? AR-GEve ??retim
              faaliyetlerine ??ncelik veren anlay??????, yayg??n lider markalara
              yapt?????? koleksiyon, kaliteli ??retim kabiliyeti sayesinde
              tan??n??yor. 6bin m??????retim tesisinde teknolojinin t??m olanaklar??
              kullan??larak 2 hatl?? ??retim tesisinde g??nde 4500 ??ift ayakkab??
              ??retmektedir.
            </Typography>
          </Grid>
          <Grid item>
            <img src={imgVoleyball} className={classes.imgRight} />
          </Grid>
          <Grid item>
            <Typography className={classes.textRight}>
              2014 y??l??ndan bu yana ad??n?? ??ocuk ayakkab?? ??retimi ve AR-GE
              faaliyetleri ile duyuran Ortaklar Ayakkab??c??l??k kendi
              kategorisinde T??rkiye???nin en geni?? ??r??n ??e??itlili??ine sahip ??retim
              firmas??d??r. Sekt??re sundu??u kaliteli ??retim sayesinde h??zl?? bir
              b??y??me kaydeden firma bug??n sekt??r??nde Deichmann, Boyner,
              Lumberjack, Hummel, US Polo, Elefanten, Fila, Civil gibi bir??ok
              firmaya ??retim yapmaktad??r.
            </Typography>
          </Grid>
          <Grid item>
            <img src={imgSwim} className={classes.imgRight} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

import { Paper } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import * as React from 'react';

const useStyles = makeStyles((theme) => ({
    layer1:{
        position:'absolute',
        left:'10%',
    }, 
    layer2: {
        position:'absolute',
    },
    layer3:{
        position:'absolute',
    },
  }));

export default function WhyImg({imgLayer1,imgLayer2,imgLayer3}) {
const classes = useStyles();
  return (
    <div>
        <Paper elevation={0} 
        className={classes.layer1}> <img src={imgLayer1} /> </Paper>
        <Paper elevation={0}>
            <img className={classes.layer2} src={imgLayer2} /></Paper>
        <Paper elevation={0}>
            <img className={classes.layer3} src={imgLayer3} /></Paper>
        
    </div>
  );
}
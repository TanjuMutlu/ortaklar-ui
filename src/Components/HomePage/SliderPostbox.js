import React, { Component,useRef,useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../styles/slider styles/SliderPostBox.scss';
import { Typography } from "@mui/material";
import waves from './img/waves.svg';
import postbox from './img/postbox.svg';



export default class SliderPostBox extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      return (
    <>
        <div className='main-post' key={'slide'} >
          <Slider 
          {...settings}
          dotsClass="slick-dots line-indicator-post"
          customPaging={(i)=><div style={{position:'absolute',width:'100%',top:'-10px',opacity:0}}>{i}</div>}
          >
            <div key={'slide1'}>
              <Typography className='title1' variant='subtitle2' >Dünyanın en yenilikçi işletmeleri hakkımızda ne düşünüyor</Typography>
              <Typography className='body1' variant='body2'>“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Exercitation veniam consequat 
sunt nostrud amet.“</Typography>
              <Typography className='title2' variant='subtitle2' sx={{fontSize:"16px"}}>Viella Malkovich</Typography>
              <Typography className='body2' variant='body2' sx={{fontSize:"16px"}}>Creative Director at Johnson</Typography>
            </div>

            <div key={'slide2'}>
            <Typography className='title1' variant='subtitle2' >2 Dünyanın en yenilikçi işletmeleri hakkımızda ne düşünüyor</Typography>
              <Typography className='body1' variant='body2'>2 “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Exercitation veniam consequat 
sunt nostrud amet.“</Typography>
              <Typography className='title2' variant='subtitle2' sx={{fontSize:"16px"}} >2 Viella Malkovich</Typography>
              <Typography className='body2' variant='body2' sx={{fontSize:"16px"}}>2 Creative Director at Johnson</Typography>
            </div>

          </Slider>
        </div>
        <div className='waves-postbox'>
        <img className='waves' src={waves} key={'waves'} />
        <img className='postbox' src={postbox} key={'postbox'} />
        </div>
        
    </>
      );
    }
  }
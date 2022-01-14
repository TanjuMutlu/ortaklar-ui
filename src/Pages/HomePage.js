import React from "react";
import HomePageBigSlider from "../Components/HomePage/HomePageBigSlider";
import HomePageCardSlider from "../Components/HomePage/HomePageCardSlider";
import HomePageWhy from "../Components/HomePage/HomePageWhy";
import SliderPostBox from "../Components/HomePage/SliderPostbox";
import OtherBrandsSlider from "../Components/HomePage/OtherBrandsSlider";
import OfferDownload from "../Components/HomePage/Offer&Download";

export default function HomePage() {
  return (
    <>
      <HomePageBigSlider />
      <br />
      <HomePageCardSlider />
      <HomePageWhy />
      <SliderPostBox />
      <OtherBrandsSlider />
      <OfferDownload />
    </>
  );
};

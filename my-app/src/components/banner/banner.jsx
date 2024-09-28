import React from 'react';
import '../../sass/layout/banner.scss';
import bannerImage from "../../assets/banner.png"; 

const Banner = () => {
  return (
    <div className="banner">
    <img src={bannerImage} alt="Banner" className="banner-image" /> 
    <h1>Chez vous, partout et ailleurs</h1>
  </div>
  );
};

export default Banner;
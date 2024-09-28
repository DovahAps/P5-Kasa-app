import React from "react";
import "../../sass/layout/bannerAbout.scss"
import bannerAbtImage from "../../assets/BannerAbout.png";
const BannerAbt = () => {
    return (
        <div className="banner-abt">
            <img src={bannerAbtImage} alt="Banner About" className="banner-abt-image" />

        </div>
    );
};
export default BannerAbt
import React from "react";
import "./banner.css";
import banner from "./unsplash.jpg";
import banner2 from "./unsplash2.jpg";
function Banner() {
  return (
    <div className="banner">
      <img className="banner__image" src={banner} alt="" />
      <img className="banner_image_mobile" src={banner2} alt="" />
      <div className="banner_introduction">
        {" "}
        Hello.<br></br>I'm <span className="banner__name">Adarsh Gupta</span>
        .<br />
        <div className="banner__D">
          <span className="banner__D_D">D</span>
          <div className="banner__D_names">
            <p className="banner_p">eveloper</p>
            <p className="banner_p">esigner</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

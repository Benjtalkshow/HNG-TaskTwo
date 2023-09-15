import "../App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import bg from "../assets/images/poster.png";
import watchTrailer from "../assets/images/watchTrailer.png";
// import imdbLogo from "../../assets/images/imbd.png";
// import orangeLogo from "../../assets/images/orange.png";

function Movies() {
  return (
    <div className="view_movies">
      <div
        className="display_image w-full h-[50vh] bg-no-repeat bg-center bg-cover flex justify-between"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <img src={watchTrailer} alt="watch trailer icon" className="w-[100px] h-[90px] m-auto"/>
      </div>
    </div>
  );
}

export default Movies;

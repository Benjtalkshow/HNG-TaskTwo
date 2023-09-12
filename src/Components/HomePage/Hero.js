import React from 'react';
import '../../App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import bgImage from '../../assets/images/poster.png';
import imdbLogo from '../../assets/images/imbd.png';
import orangeLogo from '../../assets/images/orange.png';
import playBtn from '../../assets/images/play.png';

function Hero() {
  return (
    <div className="hero-section w-full h-[100vh] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="movieDetail py-[15rem] px-4 lg:px-[8rem]">
        <h1 className="movieTitle text-white font-bold text-lg md:text-5xl leading-[1.2]">John Wick 3: Parabellum</h1>
        <div className="rating flex gap-x-5 my-5">
          <div className="rating1 flex gap-x-2">
            <img className="imdbLogo h-5" src={imdbLogo} alt="imdb logo" />
            <p className="rate text-white md:text-xl">86.0 / 100</p>
          </div>
          <div className="rating2 flex gap-x-2">
            <img className="orangeLogo" src={orangeLogo} alt="orange logo" />
            <p className="rate text-white md:text-xl">97%</p>
          </div>
        </div>
        <div className="movieDescription text-white">
          <p className="md:text-lg text-ellipsis whitespace-nowrap">John Wick is on the run after killing a member <br/>of the international assassins'
          guild, and with a <br/> $14 million price tag on his head, he is the target <br/> of hit
          men and women everywhere.</p>
        </div>
        <button className='watchTrailerBtn text-white md:text-xl flex p-4 gap-x-3 items-center my-5 bg-custom-dark-Red-Color rounded-lg'> 
        <img className="watchTrailer w-5 h-5" src={playBtn} alt='watch trailer' />
            WATCH TRAILER
            </button>
      </div>
    </div>
  );
}

export default Hero;

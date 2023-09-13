import React, { useState, useEffect } from "react";
import "../../App.css";
import axios from "axios";
import imdbLogo from "../../assets/images/imbd.png";
import orangeLogo from "../../assets/images/orange.png";
import playBtn from "../../assets/images/play.png";

function Hero() {
  const [randomMovie, setRandomMovie] = useState(null);

  // fetching movies from imdb API for hero section slider

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie",
          {
            params: {
              api_key: "7f23fe1838341209abe18781249c152f",
              language: "en-US",
              sort_by: "popularity.desc",
              page: 1,
            },
          }
        );
        selectRandomMovie(response.data.results);

        const intervalId = setInterval(() => {
          selectRandomMovie(response.data.results);
        }, 5000 * 10);

        return () => clearInterval(intervalId);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMovies();
  }, []);

  // random movies posters, ratings and description

  const selectRandomMovie = (movieList) => {
    const randomIndex = Math.floor(Math.random() * movieList.length);
    const randomMovie = movieList[randomIndex];
    setRandomMovie(randomMovie);
  };

  return (
    // hero section
    <div>
      {/* conditional rendering for hero banners or loading indicator */}
      {randomMovie ? (
        <div
          // movie poster
          className="hero-section w-full h-[100vh] bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${randomMovie.poster_path})`,
          }}
        >
          {/* movie title */}
          <div className="movieDetail py-[15rem] px-4 lg:px-[8rem]">
            <h1 className="movieTitle drop-shadow-7xl text-white font-bold text-lg md:text-5xl leading-[1.2]">
              {randomMovie.title}
            </h1>
            {/* movie ratings */}
            <div className="rating flex gap-x-5 my-5 items-center">
              <div className="rating1 flex gap-x-2 items-center">
                <img className="imdbLogo h-5" src={imdbLogo} alt="imdb logo" />
                <p className="rate drop-shadow-2xl text-white md:text-xl">
                  {randomMovie.vote_average}
                </p>
              </div>
              <div className="rating2 flex gap-x-2 items-center">
                <img
                  className="orangeLogo w-5 h-6"
                  src={orangeLogo}
                  alt="orange logo"
                />
                <p className="rate drop-shadow-2xl text-white md:text-xl">
                  {randomMovie.vote_count}
                </p>
              </div>
            </div>
            {/* movie description */}
            <div className="movieDescription text-white">
              <p className="md:text-lg text-ellipsis break-words drop-shadow-2xl">
                {randomMovie.overview}
              </p>
            </div>
            {/* watch trailer button */}
            <button className="watchTrailerBtn shadow-md text-white md:text-xl flex p-4 gap-x-3 items-center my-5 bg-custom-dark-Red-Color rounded-lg">
              <img
                className="watchTrailer w-5 h-5"
                src={playBtn}
                alt="watch trailer"
              />
              WATCH TRAILER
            </button>
          </div>
        </div>
      ) : (
        // loading indicator
        <div className="w-full h-[100vh] flex justify-center items-center bg-black text-white font-bold text-xl">
          Loading...
        </div>
      )}
    </div>
  );
}

export default Hero;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import imdb from "../assets/imdb.png";

import Movies from "../components/Movies";
import Footer from "../components/Footer";

// import { PiTelevisionBold } from 'react-icons/pi'
import { HiMenuAlt4, HiSearch } from "react-icons/hi";
import playBtn from "../assets/play.png";
import logo from "../assets/logo.png";
import tomato from "../assets/tomato.png";

const Home = () => {
  const navigate = useNavigate();
  const delay = () => {
    navigate("*");
  };

  const API_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=7f23fe1838341209abe18781249c152f`;
  const API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=7f23fe1838341209abe18781249c152f`;

  const [movieList, setMovieList] = useState("");
  const [searchedMovie, setSearchedMovie] = useState("");
  const [isError, setIsError] = useState(false);

  const errorCheck = () => {
    setTimeout(() => {
      setIsError((prev) => !prev);
    }, 1000);
  };
  const fetchMovie = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setMovieList(data.results);
    } catch (error) {
      delay();
    }
  };

  const searchMovie = async () => {
    if (searchedMovie == "") {
      errorCheck();
      fetchMovie();
    } else if (searchedMovie) {
      try {
        const res = await fetch(`${API_SEARCH}=${searchedMovie}`);
        const data = await res.json();
        setMovieList(data.results);
        setTimeout(() => {
          setSearchedMovie("");
        }, 1500);
      } catch (error) {
        delay();
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchMovie();
    }, 1000);
  }, []);

  const [randomMovie, setRandomMovie] = useState(null);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = "7f23fe1838341209abe18781249c152f";
        const language = "en-US";
        const sortBy = "popularity.desc";
        const page = 10;

        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=${language}&sort_by=${sortBy}&page=${page}`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        selectRandomMovie(data.results);

        const intervalId = setInterval(() => {
          selectRandomMovie(data.results);
        }, 5000 * 10);

        return () => clearInterval(intervalId);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMovies();
  }, []);

  // random movie posters, ratings and description
  const selectRandomMovie = (movieList) => {
    const randomIndex = Math.floor(Math.random() * movieList.length);
    const randomMovie = movieList[randomIndex];
    setRandomMovie(randomMovie);
  };

  return (
    <div className="flex flex-col bg-[#F4F5F7] min-h-screen">
      {randomMovie && (
        <header
          className="flex flex-col gap-[4rem] px-2 md:px-8 py-2 relative"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${randomMovie.poster_path})`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <nav className="flex items-center justify-between md:justify-around text-white relative">
            <div className="logo flex items-center md:gap-2 md:basis-1/4">
              <img src={logo} alt="Movie Box Logo" />

              <span className="logo_text font-semibold md:text-lg ms-2">
                MovieBox
              </span>
            </div>
            <div className="searchbar ms-4 md:basis-1/2">
              <input
                placeholder="Search for a movie..."
                className="input"
                value={searchedMovie}
                onChange={(event) => {
                  setSearchedMovie(event.target.value.toLowerCase());
                }}
              />
              <HiSearch
                className="icon cursor-pointer "
                onClick={searchMovie}
              />
            </div>
            <div className="flex items-center justify-end gap-2 md:basis-1/4">
              <span className="font-semibold">Sign in</span>
              <div className="bg-rose-700 w-[36px] h-[36px] rounded-full grid place-content-center">
                <HiMenuAlt4 />
              </div>
            </div>
            {isError ? (
              <div className="warning absolute top-0 right-0 animate__animated animate__bounceIn">
                <div className="warning__icon">
                  <svg
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m13 14h-2v-5h2zm0 4h-2v-2h2zm-12 3h22l-11-19z"
                      fill="#393a37"
                    ></path>
                  </svg>
                </div>
                <div className="warning__title">
                  You entered an empty value, try again!
                </div>
                <div className="warning__close" onClick={errorCheck}>
                  <svg
                    height="20"
                    viewBox="0 0 20 20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
                      fill="#393a37"
                    ></path>
                  </svg>
                </div>
              </div>
            ) : null}
          </nav>
          <div className="text-white md:w-[40%] flex flex-col mt-10 gap-3 z-10">
            <h1 className="text-lg md:text-xl font-semibold">
              {randomMovie.title}
            </h1>
            <div className="flex gap-x-3">
              <div className="flex gap-1 items-center">
                <img src={imdb} className="w-[50px]" loading="lazy" />
                <span className="text-sm sm:text-md">{randomMovie.popularity}</span>
              </div>
              <div className="flex gap-1 items-center">
                <img src={tomato} className="w-[25px]" loading="lazy" />
                <span className="text-sm">{randomMovie.vote_average}%</span>
              </div>
            </div>
            <p className="text-md md:text-[20px]">{randomMovie.overview}</p>
            <button className="watchTrailerBtn shadow-md  text-white md:text-md flex w-full sm:w-[40%] p-2 gap-x-3 justify-center items-center my-5 bg-custom-dark-Red-Color rounded-lg">
              <img
                className="watchTrailer w-5 h-5"
                src={playBtn}
                alt="watch trailer"
              />
              WATCH TRAILER
            </button>
          </div>
        </header>
      )}
      ;
      <Movies movieList={movieList} />
      <Footer />
    </div>
  );
};

export default Home;

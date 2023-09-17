import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import imdb from "../assets/imdb.png";
import tomato from "../assets/tomato.png";

const Cards = ({ movie }) => {
  const number = movie.vote_average * 10;

  // State to track whether the heart icon is filled (yellow) or not (white)
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  // State to store the randomNum
  const [randomNum, setRandomNum] = useState(null);

  // Function to toggle the heart icon's color
  const toggleHeartColor = (e) => {
    e.preventDefault();
    setIsHeartFilled(!isHeartFilled);
  };

  // Effect to generate randomNum once when the component is mounted
  useEffect(() => {
    const getRandomNumber = () => {
      const randomNumber = Math.random();
      const min = 70;
      const max = 90;
      const scaledNumber = min + randomNumber * (max - min + 1);
      return Math.floor(scaledNumber);
    };

    // Generate randomNum and set it in the state
    const generatedRandomNum = getRandomNumber();
    setRandomNum(generatedRandomNum);
  }, []);

  return (
    <Link to={`/${movie.id}`}>
      <div
        className="rounded-b-xl hover:scale-105 duration-500"
        data-testid="movie-card"
      >
        <img
          className="w-full object-contain"
          loading="lazy"
          data-testid="movie-poster"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="flex flex-col gap-1 mt-2">
          <span
            className="text-gray-800 text-[12px]"
            data-testid="movie-release-date"
          >
            {new Date(movie.release_date).toUTCString()}
          </span>
          <span
            className="text-gray-900 text-sm md:text-md font-semibold"
            data-testid="movie-title"
          >
            {movie.title}
          </span>
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <img src={imdb} className="w-[40px]" />
              <span className="text-[10px]">{number.toFixed(1)} / 100</span>
            </div>
            <div className="flex items-center gap-1">
              <img
                src={tomato}
                className="w-[16px] h-[16px]"
                loading="lazy"
              />
              <span className="text-[10px]">{randomNum}%</span>
            </div>
          </div>
        </div>
        <FontAwesomeIcon
          icon={faHeart}
          className={`cursor-pointer drop-shadow-md ${
            isHeartFilled ? "text-white" : "text-yellow-300"
          } text-2xl absolute top-6 right-9`}
          onClick={toggleHeartColor}
        />
      </div>
    </Link>
  );
};

export default Cards;

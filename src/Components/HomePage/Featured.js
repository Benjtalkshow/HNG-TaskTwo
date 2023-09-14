import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import imdbLogo from "../../assets/images/imbd.png";
import orangeLogo from "../../assets/images/orange.png";

function Featured() {
  const handleSeeMoreClick = () => {
    alert("See More!!");
  };
  
  // State to store the top-rated movies
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    const fetchCard = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated",
          {
            params: {
              api_key: "7f23fe1838341209abe18781249c152f",
              language: "en-US",
              page: 2,
            },
          }
        );

        // Get the top 10 rated movies
        const topRatedMovies = response.data.results.slice(0, 10);

        // Fetch genres for each movie and update the state
        const moviesWithGenres = await Promise.all(
          topRatedMovies.map(async (movie) => {
            const genreResponse = await axios.get(
              `https://api.themoviedb.org/3/movie/${movie.id}`,
              {
                params: {
                  api_key: "7f23fe1838341209abe18781249c152f",
                  language: "en-US",
                },
              }
            );

            // Extract genres from the response
            const genres = genreResponse.data.genres.map((genre) => genre.name);

            // Add genres to the movie object
            return {
              ...movie,
              genres,
            };
          })
        );

        setCards(moviesWithGenres);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCard();
  }, []);

  return (
    <div className="featured  my-10  w-[90%] mx-auto">
      <div className="featuredText flex justify-between mb-5">
        <h1 className="featuredMovie text-black text-xl lg:text-4xl font-bold">
          Featured Movie
        </h1>
        <div
          className="seeMoreDiv flex items-center gap-3 cursor-pointer"
          onClick={handleSeeMoreClick}
        >
          <p className="seeMore text-custom-dark-Red-Color text-md lg:text-lg">See more</p>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="text-custom-dark-Red-Color "
          />
        </div>
      </div>
      <div className="centerCardContainer flex justify-center items-center w-full">
      <div className="cardContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {cards.map((card) => (
        <div key={card.id} className="card cursor-pointer active:ring" onClick={() => (alert(card.id))}>
          <img
            src={`https://image.tmdb.org/t/p/original/${card.poster_path}`}
            alt={card.title}
            className="w-[400px] h-[450px]"
          />
          <div className="cardDetail">
          <p className="releaseDate py-1 text-xs text-custom-grey font-bold">{new Date (card.release_date).toUTCString()}</p>
          <h1 className="movieTitle text-lg font-bold">{card.title}</h1>
          <div className="rating flex justify-between my-2 items-center">
            <div className="rating1 flex gap-x-2 items-center">
              <img className="imdbLogo h-5" src={imdbLogo} alt="imdb logo" />
              <p className="rate">
                {card.popularity}
              </p>
            </div>
            <div className="rating2 flex gap-x-2 items-center">
              <img
                className="orangeLogo w-5 h-6"
                src={orangeLogo}
                alt="orange logo"
              />
              <p className="rate">
                {card.vote_average}%
              </p>
            </div>
          </div>
          <p className="movieGenre text-xs text-custom-grey font-bold">
            {card.genres ? card.genres.join(", ") : "N/A"}
          </p>
          </div>
        </div>
      ))}
      </div>
      </div>
    </div>
  );
}

export default Featured;

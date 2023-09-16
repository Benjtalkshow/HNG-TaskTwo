import React from "react";
import { BsChevronRight } from "react-icons/bs";

import Cards from "./Cards";

const Movies = ({ movieList }) => {
  return (
    <main className="flex flex-col p-1 md:p-8 mb-[4rem]">
      <div className="flex justify-between items-center">
        <h1 className="text-gray-900 text-sm md:text-md text-start font-bold my-6">
          Featured Movies
        </h1>
        <div className="text-pink-800 flex gap-2 items-center">
          <span className="text-sm md:text-md">see more</span>
          <BsChevronRight />
        </div>
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-5 min-h-screen gap-8 p-2 md:p-4">
        {movieList ? (
          movieList
            .slice(0, 10)
            .map((movie, index) => <Cards key={index} movie={movie} />)
        ) : (
          <div className="loading text-lg font-bold text-white absolute top-0 left-0 flex justify-center items-center bg-[#be123c] w-full h-[100v]">
            Loading...
          </div>
        )}
      </div>
    </main>
  );
};

export default Movies;

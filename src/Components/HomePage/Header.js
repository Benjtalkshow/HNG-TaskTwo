import React from "react";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


function Header(props) {
  return (
    // this section is for navbar
    <header className="header">
      <nav className="nav flex items-center justify-around py-5 bg-transparent absolute w-full z-10">
        {/* nav logo */}
        <div className="logo flex justify-center items-center gap-x-2 md:gap-x-5">
          <img
            className="logoImage h-[2.5rem] w-[2.5rem]"
            src={props.logoSrc}
            alt="moviebox logo"
          />
          <h1 className="logoText drop-shadow-2xl block text-xl md:text-2xl font-semibold text-white">
            {props.logoText}
          </h1>
        </div>

        {/* nav searchbar */}
        
        <div className="searchbar shadow-md px-2 flex justify-center items-center w-[500px] rounded-md border-2 border-white bg-transparent">
          <input
            type="text"
            className="outline-none py-2 w-[90%] text-sm text-white bg-transparent placeholder:text-white"
            placeholder={props.inputPlaceholder}
          />
          <FontAwesomeIcon icon={faSearch} className="px-3 text-white" />
        </div>

        {/* nav sign in */}

        <div className="signAndhamburger flex items-center justify-center gap-x-2 md:gap-x-5 rounded-md">
          <a
            href="https://www.google.com"
            className="signIn drop-shadow-2xl  text-lg md:text-xl text-white"
          >
            Sign in
          </a>

          {/* nav menu icon */}

          <div className="hamburger bg-custom-dark-Red-Color p-2 h-[2rem] w-[2rem] rounded-full flex justify-center items-center flex-col gap-y-2">
            <div className="burger bg-white px-2 py-[.8px] border-t border-white"></div>
            <div className="burger bg-white px-2 py-[.8px] border-t border-white"></div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

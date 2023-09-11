import "../../App.css";
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Header() {
  return (
    <div>
      <nav className="nav flex items-center justify-around py-8 bg-custom-bg-OffWhite absolute w-full">
        <div className="logo flex justify-center items-center gap-x-5">
          <img className="logoImage h-[4rem] w-[4rem]" src={logo} alt="moviebox logo" />
          <h1 className="logoText block text-2xl font-semibold">MovieBox</h1>
        </div>

        <div className="searchbar bg-red-500 px-5">
          <input type="text w-full" placeholder="What do you want to watch?" />
          <FontAwesomeIcon icon="coffee" />
        </div>

        <div className="signAndhamburger flex items-center justify-center gap-x-5 rounded-md">
          <a href="https://www.google.com" className="signIn text-xl">
            Sign in
          </a>
          <div className="hamburger bg-custom-dark-Red-Color p-2 h-[2.5rem] w-[2.5rem] rounded-full flex justify-center items-center flex-col gap-y-2">
            <div className="burger bg-white px-3 py-[1px] border-t border-white"></div>
            <div className="burger bg-white px-3 py-[1px] border-t border-white"></div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;

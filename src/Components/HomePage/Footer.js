import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer py-[5rem] mt-[2rem] flex flex-col justify-center w-full">
      <div className="flex flex-wrap justify-center gap-[4rem]">
        <FontAwesomeIcon icon={faFacebookSquare} className="text-2xl text-custom-dark-Grey" />
        <FontAwesomeIcon icon={faInstagram} className="text-2xl text-custom-dark-Grey" />
        <FontAwesomeIcon icon={faTwitter} className="text-2xl text-custom-dark-Grey" />
        <FontAwesomeIcon icon={faYoutube} className="text-2xl text-custom-dark-Grey" />
      </div>
      <div className="footerLinks py-6 flex flex-wrap justify-center gap-[1rem] md:gap-[4rem] text-lg font-bold text-custom-dark-Grey">
        <a>Conditions of Use</a>
        <a>Privacy & Policy</a>
        <a>Press Room</a>
      </div>
      <p className="text-custom-grey font-semibold text-center">© 2023 MovieBox by Nnaji Chinedu Benjamin</p>
    </div>
  );
}
export default Footer;

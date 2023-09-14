import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram, faTwitter, faYoutube, } from "@fortawesome/free-brands-svg-icons";

// footer links function
const FooterLink = ({ children }) => (
  <a className="footerLink" href="#">
    {children}
  </a>
);

function Footer() {
  const icons = [faFacebookSquare, faInstagram, faTwitter, faYoutube];
  // footer section
  return (
    <div className="footer py-[5rem] mt-[2rem] flex flex-col justify-center w-full">
      {/* brand icons */}
      <div className="brands flex flex-wrap justify-center gap-[4rem]">
        {icons.map((icon) => (
          <FontAwesomeIcon
            key={icon.iconName}
            icon={icon}
            className="text-2xl text-custom-dark-Grey"
          />
        ))}
      </div>
      {/* footer links */}
      <div className="footerLinks py-6 flex flex-wrap justify-center gap-[1rem] md:gap-[4rem] text-lg font-bold text-custom-dark-Grey">
        <FooterLink>Conditions of Use</FooterLink>
        <FooterLink>Privacy & Policy</FooterLink>
        <FooterLink>Press Room</FooterLink>
      </div>
      {/* copyrights section */}
      <p className="text-custom-grey font-semibold text-center">
        © 2023 MovieBox by Nnaji Chinedu Benjamin
      </p>
    </div>
  );
}
export default Footer;

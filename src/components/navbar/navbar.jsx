import pp from "../../assets/profile.png";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { RiProfileLine } from "react-icons/ri";
import { GoHome } from "react-icons/go";
import { GrContactInfo } from "react-icons/gr";

const Navbar = () => {
  const whatsapp = 'https://wa.me/+918668089557';
  const linkedin = 'https://www.linkedin.com/in/prakash-ponnusamy-752408249';
  const github = 'https://github.com/ItsPrakashCoder';
  const instagram = 'https://www.instagram.com/austin_prakash_';
  
  return (
    <nav className="navbar w-14 flex flex-col gap-4 items-center justify-between p-8 border-r border-neutral-800 h-full">
      {/* Profile at the top */}
      <div className="profile flex flex-shrink-0 items-center pb-3 mb-4 border-b border-neutral-800">
        {/* You can uncomment the image if needed */}
        {/* <img className="prp" src={pp} alt="Picture" width={50} height={50} /> */}
        <span className="prName text-2xl font-medium cursor-pointer bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent">
          PR
        </span>
      </div>

      {/* Menu in the middle */}
      <div className="menu flex flex-col gap-5 flex-grow">
        <Link to="/" className="px-2">
          <span><GoHome /></span>
        </Link>
        <Link to="/resume" className="px-2">
          <span><RiProfileLine /></span>
        </Link>
        <Link to="/contact" className="px-2">
          <span><GrContactInfo /></span>
        </Link>
      </div>

      {/* Social media links at the bottom */}
      <div className="smedia flex m-1 flex-col items-center justify-center gap-4 mt-auto">
        <a href={whatsapp} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href={instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

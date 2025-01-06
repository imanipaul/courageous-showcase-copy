import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";
import { ReactComponent as Courageous } from "../assets/images/COURAGEOUS.svg";
import { ReactComponent as Insta } from "../assets/images/INSTAGRAM.svg";
import { ReactComponent as Linkedin } from "../assets/images/LINKEDIN.svg";
import { ReactComponent as Vimeo } from "../assets/images/VIMEO.svg";
import hamburger from "../assets/images/HAMBURGER.svg";
import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  const [burgerVisible, setBurgerVisible] = useState(false);
  const courageousIconRef = useRef(null);
  const vimeoIconRef = useRef(null);
  const linkedinIconRef = useRef(null);
  const instaIconRef = useRef(null);

  return (
    <header>
      <p>
        <Link to="/">Courageous Showcase</Link>
      </p>
      <HamburgerMenu visible={burgerVisible} setVisible={setBurgerVisible} />
      <div className="icons">
        <p className="desktop">Find us at</p>
        <a
          href="https://www.courageousstudios.com"
          className="desktop"
          id="courageous-container"
          target="_blank"
          rel="noreferrer"
        >
          <Courageous
            fill="#ffffff"
            stroke="#ffffff"
            id="courageous"
            ref={courageousIconRef}
          />
        </a>
        <a
          href="https://vimeo.com/user62308493"
          className="desktop"
          id="vimeo-container"
          target="_blank"
          rel="noreferrer"
        >
          <Vimeo
            fill="#ffffff"
            stroke="#ffffff"
            id="vimeo"
            ref={vimeoIconRef}
          />
        </a>
        <a
          href="https://www.linkedin.com/company/courageous-studios"
          target="_blank"
          className="desktop"
          id="linkedin-container"
          rel="noreferrer"
        >
          <Linkedin
            fill="#ffffff"
            stroke="#ffffff"
            id="linkedin"
            ref={linkedinIconRef}
          />
        </a>
        <a
          href="https://www.instagram.com/courageous_studios"
          className="desktop"
          id="insta-container"
          target="_blank"
          rel="noreferrer"
        >
          <Insta
            fill="#ffffff"
            stroke="#ffffff"
            id="insta"
            ref={instaIconRef}
          />
        </a>
        <img
          className="mobile"
          src={hamburger}
          alt="instagram"
          id="insta"
          onClick={() => setBurgerVisible(true)}
        />
      </div>
    </header>
  );
}

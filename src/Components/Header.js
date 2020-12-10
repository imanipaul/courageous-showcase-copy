import "../styles/Header.scss";
import { ReactComponent as Courageous } from "../assets/images/COURAGEOUS.svg";
import { ReactComponent as Insta } from "../assets/images/INSTAGRAM.svg";
import { ReactComponent as Linkedin } from "../assets/images/LINKEDIN.svg";
import { ReactComponent as Vimeo } from "../assets/images/VIMEO.svg";
import hamburger from "../assets/images/HAMBURGER.svg";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";

export default function Header(props) {
  const [burgerVisible, setBurgerVisible] = useState(false);

  return (
    <header>
      <p onClick={() => props.setCurrentPage("homepage")}>
        Courageous Showcase
      </p>
      <HamburgerMenu visible={burgerVisible} setVisible={setBurgerVisible} />
      <div className="links">
        {/* <Courageous fill="#ffffff" stroke="#ffffff" id="courageous" />
        <Vimeo fill="#ffffff" stroke="#ffffff" id="vimeo" />
        <Linkedin fill="#ffffff" stroke="#ffffff" id="linkedin" />
        <Insta fill="#ffffff" stroke="#ffffff" id="insta" /> */}
        <a href="#" className="desktop" id="courageous-container">
          <Courageous fill="#ffffff" stroke="#ffffff" id="courageous" />
        </a>
        <a href="#" className="desktop" id="vimeo-container">
          <Vimeo fill="#ffffff" stroke="#ffffff" id="vimeo" />
        </a>
        <a href="#" className="desktop" id="linkedin-container">
          <Linkedin fill="#ffffff" stroke="#ffffff" id="linkedin" />
        </a>
        <a href="#" className="desktop" id="insta-container">
          <Insta fill="#ffffff" stroke="#ffffff" id="insta" />
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

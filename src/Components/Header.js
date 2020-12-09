import "../styles/Header.scss";
import courageous from "../assets/images/COURAGEOUS.svg";
import insta from "../assets/images/insta.png";
import linkedin from "../assets/images/LINKEDIN.svg";
import vimeo from "../assets/images/VIMEO.svg";
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
        <a href="#" className="desktop">
          <img src={courageous} alt="logo" id="courageous" />
        </a>
        <a href="#" className="desktop">
          <img src={vimeo} alt="vimeo" id="vimeo" />
        </a>
        <a href="#" className="desktop">
          <img src={linkedin} alt="linkedin" id="linkedin" />
        </a>
        <a href="#" className="desktop">
          <img src={insta} alt="instagram" id="insta" />
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

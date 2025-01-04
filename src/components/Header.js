import "../styles/Header.scss";
import { ReactComponent as Courageous } from "../assets/images/COURAGEOUS.svg";
import { ReactComponent as Insta } from "../assets/images/INSTAGRAM.svg";
import { ReactComponent as Linkedin } from "../assets/images/LINKEDIN.svg";
import { ReactComponent as Vimeo } from "../assets/images/VIMEO.svg";
import hamburger from "../assets/images/HAMBURGER.svg";
import HamburgerMenu from "./HamburgerMenu";
import {  useRef, useState } from "react";

export default function Header() {
  const [burgerVisible, setBurgerVisible] = useState(false);
  const courageousIconRef = useRef(null);
  const vimeoIconRef = useRef(null);
  const linkedinIconRef = useRef(null);
  const instaIconRef = useRef(null);

  // function handleHover(currentRef) {
  //   // currentRef.current.classList.remove("hover");
  //   currentRef.current.classList.add("hover");

  //   currentRef !== courageousIconRef &&
  //     courageousIconRef.current.classList.add("inactive");
  //   currentRef !== vimeoIconRef &&
  //     vimeoIconRef.current.classList.add("inactive");
  //   currentRef !== linkedinIconRef &&
  //     linkedinIconRef.current.classList.add("inactive");
  //   currentRef !== instaIconRef &&
  //     instaIconRef.current.classList.add("inactive");
  // }

  // function removeHover(currentRef) {
  //   currentRef.current.classList.remove = "hover";
  //   courageousIconRef.current.classList.remove = "inactive";
  //   linkedinIconRef.current.classList.remove = "inactive";
  //   instaIconRef.current.classList.remove = "inactive";
  //   vimeoIconRef.current.classList.remove = "inactive";
  // }

  // useEffect(() => {
  //   // console.log(courageousIconRef);
  //   courageousIconRef.current.addEventListener("mouseover", () =>
  //     handleHover(courageousIconRef)
  //   );
  //   courageousIconRef.current.addEventListener("mouseout", () =>
  //     removeHover(courageousIconRef)
  //   );
  // }, []);

  return (
    <header>
      <p onClick={() => (window.location = "/")}>Courageous Showcase</p>
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

import { slide as Menu } from "react-burger-menu";
import "../styles/HamburgerMenu.scss";
import close from "../assets/images/Close.svg";
import arrow from "../assets/images/RIGHT-ARROW.svg";

export default function HamburgerMenu(props) {
  return (
    <section
      className={`burger-menu-container ${props.visible ? "show" : "hidden"}`}
    >
      <nav>
        <img src={close} alt="close" onClick={() => props.setVisible(false)} />
        <a
          href="https://www.courageousstudios.com"
          target="_blank"
          rel="noreferrer"
        >
          Who we are
          <img src={arrow} alt="arrow" />
        </a>
        <a
          href="https://vimeo.com/user62308493"
          target="_blank"
          rel="noreferrer"
        >
          Vimeo
        </a>
        <a
          href="https://www.linkedin.com/company/courageous-studios"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/courageous_studios"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </nav>
    </section>
  );
}

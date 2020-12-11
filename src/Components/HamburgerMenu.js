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
        <a>
          Who we are
          <img src={arrow} alt="arrow" />
        </a>
        <a>Vimeo</a>
        <a>LinkedIn</a>
        <a>Instagram</a>
      </nav>
    </section>
  );
}

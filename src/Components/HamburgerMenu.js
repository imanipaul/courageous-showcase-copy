import { slide as Menu } from "react-burger-menu";
import "../styles/HamburgerMenu.scss";
import close from "../assets/images/Close.svg";

export default function HamburgerMenu(props) {
  return (
    <section
      className={`burger-menu-container ${props.visible ? "show" : "hidden"}`}
      //   className={`burger-menu-container hidden`}
    >
      <nav>
        <img src={close} alt="close" onClick={() => props.setVisible(false)} />
        <a>Home</a>
        <a>Vimeo</a>
        <a>LinkedIn</a>
        <a>Instagram</a>
      </nav>
    </section>
  );
}

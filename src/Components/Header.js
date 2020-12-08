import "../styles/Header.scss";
import courageous from "../assets/images/COURAGEOUS.svg";
import insta from "../assets/images/insta.png";
import linkedin from "../assets/images/LINKEDIN.svg";
import vimeo from "../assets/images/VIMEO.svg";

export default function Header() {
  return (
    <header>
      <p>Courageous Showcase</p>
      <div className="links">
        <a href="#">
          <img src={courageous} alt="logo" id="courageous" />
        </a>
        <a href="#">
          <img src={vimeo} alt="vimeo" id="vimeo" />
        </a>
        <a href="#">
          <img src={linkedin} alt="linkedin" id="linkedin" />
        </a>
        <a href="#">
          <img src={insta} alt="instagram" id="insta" />
        </a>
      </div>
    </header>
  );
}

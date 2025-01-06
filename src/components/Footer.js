import "../styles/Footer.scss";
import { ReactComponent as Arrow } from "../assets/images/LEFT-ARROW.svg";
import { Link } from "react-router-dom";

export default function Footer({ currentPage }) {
  return (
    <footer>
      <Link to="/">
        <div>
          <p>
            {currentPage !== "homepage" && <Arrow className="arrow" />}
            <span className="first">Courageous Showcase </span>
            <span className="last">2020 in Film</span>
          </p>
        </div>
      </Link>
    </footer>
  );
}

import "../styles/Footer.scss";
import { ReactComponent as Arrow } from "../assets/images/LEFT-ARROW.svg";

export default function Footer(props) {
  return (
    <footer onClick={() => (window.location = `/`)}>
      <div>
        <p>
          {props.currentPage !== "homepage" && <Arrow className="arrow" />}
          <span className="first">Courageous Showcase </span>
          <span className="last">2020 in Film</span>
        </p>
      </div>
    </footer>
  );
}

import "../styles/Footer.scss";
import arrow from "../assets/images/LEFT-ARROW.svg";

export default function Footer(props) {
  return (
    <footer onClick={() => (window.location = `/`)}>
      <p>
        {props.currentPage !== "homepage" && <img src={arrow} alt="arrow" />}
        <span className="first">Courageous Showcase </span>
        <span className="last">2020 Values</span>
      </p>
    </footer>
  );
}

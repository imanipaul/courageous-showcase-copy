import "../styles/Links.scss";
import previousIcon from "../assets/images/LEFT-ARROW.svg";
import nextIcon from "../assets/images/RIGHT-ARROW.svg";
import { Link } from "react-router-dom";

export default function Links2({ currentPage, data, shuffledData }) {
  console.log("currentpage", currentPage);

  const prevReferencePoint =
    currentPage === 0 ? shuffledData.length : currentPage;

  const nextReferencePoint = currentPage === 11 ? 0 : currentPage + 1;

  return (
    <section className="links">
      <div className="button-container">
        <Link to={`/${shuffledData[prevReferencePoint - 1].theme}`}>
          <button
            className="previous"
            style={{
              marginRight: currentPage === shuffledData.length && "auto",
            }}
          >
            <img src={previousIcon} alt="previous" />
            <div className="button-content">
              <p className="theme">
                {shuffledData[prevReferencePoint - 1].theme}
              </p>
              <p className="title">
                {shuffledData[prevReferencePoint - 1].title}
              </p>
              <p className="brand">
                {shuffledData[prevReferencePoint - 1].brand}
              </p>
            </div>
          </button>
        </Link>

        <Link to={`/${shuffledData[nextReferencePoint].theme}`}>
          <button
            className="next"
            style={{ marginLeft: currentPage === 0 && "auto" }}
          >
            <div className="button-content">
              <p className="theme">{shuffledData[nextReferencePoint].theme}</p>
              <p className="title">{shuffledData[nextReferencePoint].title}</p>
              <p className="brand">{shuffledData[nextReferencePoint].brand}</p>
            </div>
            <img src={nextIcon} alt="previous" />
          </button>
        </Link>
      </div>
    </section>
  );
}

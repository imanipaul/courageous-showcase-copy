import "../styles/Links.scss";
import previousIcon from "../assets/images/LEFT-ARROW.svg";
import nextIcon from "../assets/images/RIGHT-ARROW.svg";

export default function Links(props) {
  return (
    <section className="links">
      <div className="button-container">
        {props.currentPage !== 0 && (
          <button
            className="previous"
            style={{
              marginRight: props.currentPage === props.data.length && "auto",
            }}
          >
            <img src={previousIcon} alt="previous" />
            <div className="button-content">
              <p className="theme">{props.data[props.currentPage - 1].theme}</p>
              <p className="title">
                {" "}
                {props.data[props.currentPage - 1].title}
              </p>
              <p className="brand">
                {" "}
                {props.data[props.currentPage - 1].brand}
              </p>
            </div>
          </button>
        )}

        {props.currentPage !== 11 && (
          <button
            className="next"
            style={{ marginLeft: props.currentPage === 0 && "auto" }}
          >
            <div className="button-content">
              <p className="theme">{props.data[props.currentPage + 1].theme}</p>
              <p className="title">
                {" "}
                {props.data[props.currentPage + 1].title}
              </p>
              <p className="brand">
                {" "}
                {props.data[props.currentPage + 1].brand}
              </p>
            </div>
            <img src={nextIcon} alt="previous" />
          </button>
        )}
      </div>
    </section>
  );
}

{
}

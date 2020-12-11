import "../styles/Links.scss";
import previousIcon from "../assets/images/LEFT-ARROW.svg";
import nextIcon from "../assets/images/RIGHT-ARROW.svg";

export default function Links(props) {
  return (
    <section className="links">
      <div className="button-container">
        {props.currentPage === 0 ? (
          <button
            className="previous"
            style={{
              marginRight: props.currentPage === props.data.length && "auto",
            }}
            onClick={() =>
              (window.location = `/${props.data[props.data.length - 1].theme}`)
            }
          >
            <img src={previousIcon} alt="previous" />
            {props.data && (
              <div className="button-content">
                <p className="theme">
                  {props.data[props.data.length - 1].theme}
                </p>
                <p className="title">
                  {props.data[props.data.length - 1].title}
                </p>
                <p className="brand">
                  {props.data[props.data.length - 1].brand}
                </p>
              </div>
            )}
          </button>
        ) : (
          <button
            className="previous"
            style={{
              marginRight: props.currentPage === props.data.length && "auto",
            }}
            onClick={() =>
              (window.location = `/${props.data[props.currentPage - 1].theme}`)
            }
          >
            <img src={previousIcon} alt="previous" />
            <div className="button-content">
              <p className="theme">{props.data[props.currentPage - 1].theme}</p>
              <p className="title">{props.data[props.currentPage - 1].title}</p>
              <p className="brand">{props.data[props.currentPage - 1].brand}</p>
            </div>
          </button>
        )}
        {/* {console.log("~~~length", props.data.length)} */}

        {props.currentPage === 11 ? (
          <button
            className="next"
            style={{ marginLeft: props.currentPage === 0 && "auto" }}
            onClick={() => (window.location = `/${props.data[0].theme}`)}
          >
            <div className="button-content">
              <p className="theme">{props.data[0].theme}</p>
              <p className="title">{props.data[0].title}</p>
              <p className="brand">{props.data[0].brand}</p>
            </div>
            <img src={nextIcon} alt="previous" />
          </button>
        ) : (
          <button
            className="next"
            style={{ marginLeft: props.currentPage === 0 && "auto" }}
            onClick={() =>
              (window.location = `/${props.data[props.currentPage + 1].theme}`)
            }
          >
            <div className="button-content">
              <p className="theme">{props.data[props.currentPage + 1].theme}</p>
              <p className="title">{props.data[props.currentPage + 1].title}</p>
              <p className="brand">{props.data[props.currentPage + 1].brand}</p>
            </div>
            <img src={nextIcon} alt="previous" />
          </button>
        )}
      </div>
    </section>
  );
}

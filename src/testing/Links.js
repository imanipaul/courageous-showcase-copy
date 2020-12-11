import "../styles/Links.scss";
import previousIcon from "../assets/images/LEFT-ARROW.svg";
import nextIcon from "../assets/images/RIGHT-ARROW.svg";
import { useEffect } from "react";

export default function Links(props) {
  useEffect(() => {
    console.log("~~Links currentPage", props.currentPage);
    console.log("~~Links shuffled Data", props.shuffledData);
    console.log(
      "~~Links shuffled data at current page",
      props.shuffledData[props.currentPage]
    );
  });

  return (
    <section className="links">
      <div className="button-container">
        {props.currentPage === 0 ? (
          <button
            className="previous"
            style={{
              marginRight:
                props.currentPage === props.shuffledData.length && "auto",
            }}
            onClick={() =>
              (window.location = `/${
                props.shuffledData[props.shuffledData.length - 1].theme
              }`)
            }
          >
            <img src={previousIcon} alt="previous" />
            {props.shuffledData && (
              <div className="button-content">
                <p className="theme">
                  {props.shuffledData[props.shuffledData.length - 1].theme}
                </p>
                <p className="title">
                  {props.shuffledData[props.shuffledData.length - 1].title}
                </p>
                <p className="brand">
                  {props.shuffledData[props.shuffledData.length - 1].brand}
                </p>
              </div>
            )}
          </button>
        ) : (
          <button
            className="previous"
            style={{
              marginRight:
                props.currentPage === props.shuffledData.length && "auto",
            }}
            onClick={() =>
              (window.location = `/${
                props.shuffledData[props.currentPage - 1].theme
              }`)
            }
          >
            <img src={previousIcon} alt="previous" />
            <div className="button-content">
              <p className="theme">
                {props.shuffledData[props.currentPage - 1].theme}
              </p>
              <p className="title">
                {props.shuffledData[props.currentPage - 1].title}
              </p>
              <p className="brand">
                {props.shuffledData[props.currentPage - 1].brand}
              </p>
            </div>
          </button>
        )}
        {/* {console.log("~~~length", props.shuffledData.length)} */}

        {props.currentPage === 11 ? (
          <button
            className="next"
            style={{ marginLeft: props.currentPage === 0 && "auto" }}
            onClick={() =>
              (window.location = `/${props.shuffledData[0].theme}`)
            }
          >
            <div className="button-content">
              <p className="theme">{props.shuffledData[0].theme}</p>
              <p className="title">{props.shuffledData[0].title}</p>
              <p className="brand">{props.shuffledData[0].brand}</p>
            </div>
            <img src={nextIcon} alt="previous" />
          </button>
        ) : (
          <button
            className="next"
            style={{ marginLeft: props.currentPage === 0 && "auto" }}
            onClick={() =>
              (window.location = `/${
                props.shuffledData[props.currentPage + 1].theme
              }`)
            }
          >
            <div className="button-content">
              <p className="theme">
                {props.shuffledData[props.currentPage + 1].theme}
              </p>
              <p className="title">
                {props.shuffledData[props.currentPage + 1].title}
              </p>
              <p className="brand">
                {props.shuffledData[props.currentPage + 1].brand}
              </p>
            </div>
            <img src={nextIcon} alt="previous" />
          </button>
        )}
      </div>
    </section>
  );
}

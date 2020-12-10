import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import Vimeo from "@vimeo/player";
import "../styles/Video.scss";
import Footer from "./Footer";

function Video(props) {
  const [buttonPlacement, setButtonPlacement] = useState(
    window.innerWidth > 648 ? "desktop" : "mobile"
  );

  const loopRef = useRef(null);
  const videoRef = useRef(null);

  function handleResize() {
    console.log("resizing!");
    setButtonPlacement(window.innerWidth > 648 ? "desktop" : "mobile");
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("data", props.data);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="video">
      <Helmet>
        <meta charSet="utf-8" />
        {/* <title>{props.data.title}</title> */}
      </Helmet>
      <div className="player-wrapper">
        <div className="overlay">
          <video
            ref={loopRef}
            src={props.data.loop}
            poster={props.data.poster}
            autoPlay
            muted
            loop
            playsInline
          />
          <button
            onClick={() => {
              loopRef.current.style.zIndex = -100;
              loopRef.current.pause();
              videoRef.current.style.zIndex = 100;
              console.log("video ref is", videoRef.current);
              let player = new Vimeo(videoRef.current);
              player.play();
            }}
          >
            Play Now
          </button>
        </div>
        <iframe
          ref={videoRef}
          className="player"
          src={`https://player.vimeo.com/video/${props.data.video}?color=b89544&title=0&byline=0&portrait=0`}
          width="100%"
          height="100%"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>

        {/* <iframe src="https://player.vimeo.com/video/434733209?color=b89544&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe> */}
      </div>
      <div className="content">
        <div className="info">
          <p className="brand">{props.data.brand}</p>
          <div className="descriptions">
            <div className="title-container">
              <div className="title">{props.data.title}</div>

              {buttonPlacement === "desktop" && (
                <button>Share {window.innerWidth < 361 ? "Video" : ""}</button>
              )}
            </div>
            <div className="right">{props.data.description}</div>
          </div>

          {buttonPlacement === "mobile" && (
            <button>Share {window.innerWidth < 361 ? "Video" : ""}</button>
          )}
        </div>
        <div className="quote">
          <p>{props.data.quote}</p>
        </div>
      </div>
      <Footer data={props.allData} currentPage={props.currentPage} />
    </section>
  );
}

export default Video;

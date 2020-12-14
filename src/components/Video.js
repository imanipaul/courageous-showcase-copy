import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import MetaDecorator from "./MetaDecorator";
import Vimeo from "@vimeo/player";
import Links from "./Links";
import quote from "../assets/images/QUOTE.svg";
import "../styles/Video.scss";

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
    props.setCurrentPage(props.value);

    window.addEventListener("resize", handleResize);
    console.log("data", props.data);

    console.log("theme lowercase", props.data.theme.toLowerCase());

    return () => window.removeEventListener("resize", handleResize);
  }, [props]);

  return (
    <section className="video">
      <MetaDecorator
        title={`${props.data.theme} | Courageous Showcase`}
        description={props.data.description}
        image={props.data.preview}
        video={props.data.loop}
        url={`/${props.data.theme.toLowerCase()}`}
      />
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
          title={`${props.data.video}`}
          ref={videoRef}
          className="player"
          src={`https://player.vimeo.com/video/${props.data.video}?color=b89544&title=0&byline=0&portrait=0`}
          width="100%"
          height="100%"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
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
          <img src={quote} alt="quote marks" />
          <p>{props.data.quote}</p>
        </div>
      </div>

      {props.currentPage !== "homepage" && (
        <Links
          data={props.allData}
          currentPage={props.currentPage}
          shuffledData={props.shuffledData}
        />
      )}
    </section>
  );
}

export default Video;

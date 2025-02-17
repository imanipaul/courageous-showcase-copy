import { useEffect, useRef, useState } from "react";
import Vimeo from "@vimeo/player";
import Links from "./Links";
import quote from "../assets/images/QUOTE.svg";
import "../styles/Video.scss";

function Video({
  setCurrentPage,
  value,
  data,
  currentPage,
  allData,
  shuffledData,
}) {
  const [buttonPlacement, setButtonPlacement] = useState(
    window.innerWidth > 648 ? "desktop" : "mobile"
  );

  const loopRef = useRef(null);
  const videoRef = useRef(null);

  function handleResize() {
    setButtonPlacement(window.innerWidth > 648 ? "desktop" : "mobile");
  }

  useEffect(() => {
    setCurrentPage(value);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="video">
      <div className="player-wrapper">
        <div className="overlay">
          <video
            ref={loopRef}
            src={data.loop}
            poster={data.poster}
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
          title={`${data.video}`}
          ref={videoRef}
          className="player"
          src={`https://player.vimeo.com/video/${data.video}?color=b89544&title=0&byline=0&portrait=0`}
          width="100%"
          height="100%"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
      <div className="content">
        <div className="info">
          <p className="brand">{data.brand}</p>
          <div className="descriptions">
            <div className="title-container">
              <div className="title">{data.title}</div>

              {buttonPlacement === "desktop" && (
                <button>Share {window.innerWidth < 361 ? "Video" : ""}</button>
              )}
            </div>
            <div className="right">{data.description}</div>
          </div>

          {buttonPlacement === "mobile" && (
            <button>Share {window.innerWidth < 361 ? "Video" : ""}</button>
          )}
        </div>
        <div className="quote">
          <img src={quote} alt="quote marks" />
          <p>{data.quote}</p>
        </div>
      </div>

      {currentPage !== "homepage" && (
        <>
          <Links
            data={allData}
            currentPage={currentPage}
            shuffledData={shuffledData}
          />
        </>
      )}
    </section>
  );
}

export default Video;

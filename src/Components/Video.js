import { Helmet } from "react-helmet-async";
import "../styles/Video.scss";

function Video() {
  return (
    <section className="video">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Test</title>
      </Helmet>
      {/* <div className="player-container"> */}
      <div className="player-wrapper">
        <iframe
          className="player"
          src="https://player.vimeo.com/video/376857392?color=b89544&title=0&byline=0&portrait=0"
          width="100%"
          height="100%"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
      {/* </div> */}
      Testingggg
    </section>
  );
}

export default Video;

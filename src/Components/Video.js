import { Helmet } from "react-helmet";
import "../styles/Video.scss";

function Video() {
  return (
    <section className="video">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Test</title>
      </Helmet>
      <div className="player-container">
        <div className="player-wrapper">
          <iframe
            className="player"
            src="https://player.vimeo.com/video/434733209?color=b89544&title=0&byline=0&portrait=0"
            width="100%"
            height="100%"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      Testingggg
    </section>
  );
}

export default Video;

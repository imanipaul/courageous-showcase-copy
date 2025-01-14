import "../styles/Homepage.scss";
import { Link } from "react-router-dom";

export default function Homepage({ shuffled, shuffledData, setCurrentPage }) {
  return (
    <section className="homepage">
      <div className="header">
        <h1>2020 in film</h1>
        <p>
          Time and again, 2020 has challenged us to be more agile in our
          approach to telling brands' stories, prioritizing safety without
          compromising quality. This site is a compendium of our work from the
          past year – twelve films that most exemplify our values at Courageous
          Studios. We're proud to share each and every one with you as we fix
          our gaze on the horizon, to the year that lies ahead.
        </p>
      </div>
      <div className="grid-container">
        <div className="value-grid">
          {shuffled &&
            shuffledData.map((item, index) => {
              return (
                <div
                  className={`square s${index + 1}`}
                  id={`${item.theme}`}
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(index);
                  }}
                >
                  <Link to={`/${item.theme}`}>
                    <img src={item.poster} alt="poster" />
                    <video
                      src={item.loop}
                      poster={item.poster}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />

                    <div className="video-info">
                      <p className="title">{item.title}</p>
                      <p className="brand">{item.brand}</p>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

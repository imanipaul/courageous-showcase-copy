import { Helmet } from "react-helmet-async";
import "../styles/Homepage.scss";

export default function Homepage(props) {
  return (
    <section className="homepage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Courageous Showcase</title>
      </Helmet>
      <div className="header">
        <h1>2020 Values</h1>
        <p>
          Torquatos nostros? quos dolores et expedita distinctio nam libero
          tempore, cum a sapiente delectus, ut ad modum, quaeso, interpretaris?
          sicine eos et fortibus viris commemorandis eorumque factis non possim
          accommodare torquatos nostros? quos tu tam egregios viros censes
          tantas res gessisse sine dubio praeclara sunt.
        </p>
      </div>
      <div className="grid-container">
        <div className="value-grid">
          {props.data.map((item, index) => {
            return (
              <div
                className={`square s${index + 1}`}
                key={index}
                onClick={() => props.setCurrentPage(index)}
              >
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
              </div>
            );
          })}
        </div>
      </div>
      {/* <button onClick={() => props.setCurrentPage(3)}>Video Page</button> */}
    </section>
  );
}

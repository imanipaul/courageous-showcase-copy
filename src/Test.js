import { Helmet } from "react-helmet";

function Test() {
  return (
    <section>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Test</title>
      </Helmet>
      <iframe
        src="https://player.vimeo.com/video/434733209?color=b89544&title=0&byline=0&portrait=0"
        width={"100vw"}
        height="360"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
      <p>
        <a href="https://vimeo.com/434733209">Target - The Dad Gang</a> from{" "}
        <a href="https://vimeo.com/user62308493">Courageous Studios</a> on{" "}
        <a href="https://vimeo.com">Vimeo</a>.
      </p>
    </section>
  );
}

export default Test;

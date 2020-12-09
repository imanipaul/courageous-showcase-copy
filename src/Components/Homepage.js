export default function Homepage() {
  return (
    <section className="homepage">
      This is the home page
      <button onClick={() => (window.location.pathname = "/video")}>
        Video Page
      </button>
    </section>
  );
}

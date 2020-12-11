import "../styles/Footer.scss";

export default function Footer() {
  return (
    <footer onClick={() => (window.location = `/`)}>
      <p>
        <span className="first">Courageous Showcase </span>
        <span className="last">2020 Values</span>
      </p>
    </footer>
  );
}

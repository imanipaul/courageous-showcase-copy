export default function Homepage(props) {
  return (
    <section className="homepage">
      This is the home page
      <button onClick={() => props.setCurrentPage(3)}>Video Page</button>
    </section>
  );
}

import "../styles/Footer.scss";

export default function Footer(props) {
  return (
    <footer>
      <div className="button-container">
        {props.currentPage !== 0 && (
          <button>
            <p>{props.data[props.currentPage - 1].theme}</p>
            <p>Previous {props.data[props.currentPage - 1].title}</p>
            <p>Previous {props.data[props.currentPage - 1].brand}</p>
          </button>
        )}

        {props.currentPage !== 11 && (
          <button>
            <p>{props.data[props.currentPage + 1].theme}</p>
            <p>Previous {props.data[props.currentPage + 1].title}</p>
            <p>Previous {props.data[props.currentPage + 1].brand}</p>
          </button>
        )}
      </div>
    </footer>
  );
}

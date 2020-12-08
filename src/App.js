import "./App.css";
import Video from "./Components/Video";
import Test from "./Test";

function App() {
  // const pickArticle = () => {
  //   if (
  //     window.location.pathname.split("/").includes("InvestmentGradeCashmere")
  //   ) {
  //     return <ArticleOne />;
  //   }
  //   if (window.location.pathname.split("/").includes("SecuringTheWorld")) {
  //     return <ArticleTwo  />;
  //   }
  //   return <ArticleOne />;
  // };

  return (
    <div className="App">
      This is the App Page
      {window.location.pathname.split("/").includes("video") && <Video />}
    </div>
  );
}

export default App;

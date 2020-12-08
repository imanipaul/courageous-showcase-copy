import './App.css';
import Test from './Test'

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
    {window.location.pathname.split("/").includes('test') && <Test />}
     
    </div>
  );
}

export default App;

import "./App.css";
import { HelmetProvider } from "react-helmet-async";

import Header from "./components/Header";

import Video from "./components/Video";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Header />

        {window.location.pathname.split("/").includes("video") && <Video />}
      </div>
    </HelmetProvider>
  );
}

export default App;

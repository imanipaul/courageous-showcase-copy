import "./App.css";
import { HelmetProvider } from "react-helmet-async";

import Header from "./components/Header";

import Video from "./components/Video";
import HamburgerMenu from "./components/HamburgerMenu";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Header />
        {/* <HamburgerMenu /> */}

        {window.location.pathname.split("/").includes("video") && <Video />}
      </div>
    </HelmetProvider>
  );
}

export default App;

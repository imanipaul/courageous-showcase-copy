import "./App.css";
import { HelmetProvider } from "react-helmet-async";

import Header from "./components/Header";
import Video from "./components/Video";
import Homepage from "./components/Homepage";

import { data } from "./data/data";

import familyOverlay from "./assets/images/family-overlay.jpg";
import { useState } from "react";

function App() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <HelmetProvider>
      <div className="App">
        <Header />

        {window.location.pathname === "/" && <Homepage />}

        {window.location.pathname.split("/").includes("video") && (
          <Video overlay={familyOverlay} data={data[1]} />
        )}
      </div>
    </HelmetProvider>
  );
}

export default App;

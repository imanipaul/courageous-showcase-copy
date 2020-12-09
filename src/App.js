import "./App.css";
import { HelmetProvider } from "react-helmet-async";

import Header from "./components/Header";
import Video from "./components/Video";

import { data } from "./data/data";

import familyOverlay from "./assets/images/family-overlay.jpg";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Header />

        {window.location.pathname.split("/").includes("video") && (
          <Video overlay={familyOverlay} data={data[1]} />
        )}
      </div>
    </HelmetProvider>
  );
}

export default App;

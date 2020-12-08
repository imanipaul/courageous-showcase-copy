import "./App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Video from "./Components/Video";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        This is the App Page
        {window.location.pathname.split("/").includes("video") && <Video />}
      </div>
    </HelmetProvider>
  );
}

export default App;

import "./App.css";
import { HelmetProvider } from "react-helmet-async";

import Header from "./components/Header";
import Video from "./components/Video";
import Homepage from "./components/Homepage";

import { data } from "./data/data";

import familyOverlay from "./assets/images/family-overlay.jpg";
import { useEffect, useState } from "react";

function App() {
  // let dataMutated = data;
  const [currentPage, setCurrentPage] = useState("homepage");
  const [shuffledData, setShuffledData] = useState([]);
  const [shuffled, setShuffled] = useState(false);

  let dataMutated = JSON.parse(JSON.stringify(data));

  useEffect(() => {
    shuffleData(dataMutated);
    console.log("data", data);
    console.log("data mutated", dataMutated);
  }, []);

  const shuffleData = (dataArray) => {
    for (let i = dataArray.length - 1; i > 0; i--) {
      const val = Math.floor(Math.random() * i);
      const hold = dataArray[i];
      dataArray[i] = dataArray[val];
      dataArray[val] = hold;
    }
    setShuffledData(dataArray);
    setShuffled(true);

    console.log("data", data);
    console.log("data mutated", dataMutated);
    console.log("shuffledData", shuffledData);

    // setShuffled(true);
  };

  return (
    <HelmetProvider>
      <div className="App">
        <Header setCurrentPage={setCurrentPage} />
        {/* <Video
          data={shuffledData[currentPage]}
          allData={shuffledData}
          currentPage={currentPage}
        /> */}

        {/* <Homepage
          setCurrentPage={setCurrentPage}
          shuffled={shuffled}
          data={shuffledData}
        /> */}

        {/* {window.location.pathname.length > 1 ? (
          <Video
            data={shuffledData[currentPage]}
            allData={shuffledData}
            currentPage={currentPage}
          />
        ) : (
          <Homepage
            setCurrentPage={setCurrentPage}
            shuffled={shuffled}
            data={shuffledData}
          />
        )} */}

        {currentPage === "homepage" ? (
          <Homepage
            setCurrentPage={setCurrentPage}
            shuffled={shuffled}
            data={shuffledData}
          />
        ) : (
          <Video
            data={shuffledData[currentPage]}
            allData={shuffledData}
            currentPage={currentPage}
          />
        )}
      </div>
    </HelmetProvider>
  );
}

export default App;

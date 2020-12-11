import "./App.css";
import { HelmetProvider } from "react-helmet-async";

import Header from "./components/Header";
import Video from "./components/Video";
import Homepage from "./components/Homepage";

import { data } from "./data/data";

import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Links from "./components/Links";

function App() {
  const [currentPage, setCurrentPage] = useState("homepage");
  const [shuffledData, setShuffledData] = useState([]);
  const [shuffled, setShuffled] = useState(false);

  let url = "localhost:3000";

  let dataMutated = JSON.parse(JSON.stringify(data));

  useEffect(() => {
    let storageArray = JSON.parse(sessionStorage.getItem("shuffledArray"));
    console.log("storage Array", storageArray);

    if (storageArray) {
      setShuffledData(storageArray);
      setShuffled(true);
    } else {
      shuffleData(dataMutated);
    }

    console.log("data", data);
    console.log("data mutated", dataMutated);
  }, []);

  const shuffleData = (dataArray) => {
    console.log("shuffling...");
    for (let i = dataArray.length - 1; i > 0; i--) {
      const val = Math.floor(Math.random() * i);
      const hold = dataArray[i];
      dataArray[i] = dataArray[val];
      dataArray[val] = hold;
    }
    setShuffledData(dataArray);
    setShuffled(true);

    sessionStorage.setItem("shuffledArray", JSON.stringify(dataArray));

    console.log("data", data);
    console.log("data mutated", dataMutated);
    console.log("shuffledData", shuffledData);
  };

  function pickVideoPage() {
    let path = window.location.pathname;

    for (let i = 0; i < shuffledData.length; i++) {
      if (path === `/${shuffledData[i].theme}`) {
        console.log("theme is", shuffledData[i].theme);
        return (
          <Video
            url={url}
            shuffledData={shuffledData}
            data={shuffledData[i]}
            allData={data}
            currentPage={currentPage}
            value={i}
            setCurrentPage={setCurrentPage}
          />
        );
      }
    }

    if (path === "/") {
      return (
        <Homepage
          setCurrentPage={setCurrentPage}
          shuffled={shuffled}
          data={data}
          shuffledData={shuffledData}
        />
      );
    }
  }

  return (
    <HelmetProvider>
      <div className="App">
        <Header setCurrentPage={setCurrentPage} />
        {pickVideoPage()}
        <Footer currentPage={currentPage} />
      </div>
    </HelmetProvider>
  );
}

export default App;
